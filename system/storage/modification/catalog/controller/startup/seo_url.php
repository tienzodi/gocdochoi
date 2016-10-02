<?php
class ControllerStartupSeoUrl extends Controller {

            private $url_prefix;
            private $language_id;
            public static $new_route;
            public static $pretty_urls;
            public static $use_original_table = null;
            public static $use_original_table_fallback;
            

            public function setUrlLanguageCode($language_code)
            {
                $this->url_prefix = !empty($language_code) ? (string) $language_code . '/' : '';
            }
            public function setUrlLanguageId($language_id)
            {
                $this->language_id = (int) $language_id;
            }
            
	public function index() {

            if($this->registry->get('tbEngine') instanceof TB_Engine) {
                $this->registry->get('tbEngine')->getEventDispatcher()->notify(new sfEvent($this, 'oc:ControllerCommonSeoUrl/index'));
            }
            
		// Add rewrite to url class
		if ($this->config->get('config_seo_url')) {
			$this->url->addRewrite($this);
		}

		// Decode URL

            if (class_exists('TB_Engine') && TB_Engine::hasInstance() && TB_Engine::instance()->getContext()->getArea() == 'catalog' && TB_Engine::instance()->getThemeData()->route) {
                return;
            }
            
		if (isset($this->request->get['_route_'])) {

            $stories_keyword = '';
            if (($stories_settings = $this->config->get('stories_settings')) && !empty($stories_settings['keyword'])) {
                $stories_keyword = $stories_settings['keyword'];
            }
            
			$parts = explode('/', $this->request->get['_route_']);

			// remove any empty arrays from trailing
			if (utf8_strlen(end($parts)) == 0) {
				array_pop($parts);
			}


            null !== self::$new_route && $parts = array();
            
			foreach ($parts as $part) {
				
            $use_original_table = null !== self::$use_original_table ? self::$use_original_table : true;
            if (!$use_original_table) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "burnengine_url_alias WHERE keyword = '" . $this->db->escape($part) . "' AND language_id = " . $this->language_id);
                if (!$query->num_rows && self::$use_original_table_fallback) {
                    $use_original_table = true;
                }
            }
            if ($use_original_table) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE keyword = '" . $this->db->escape($part) . "'");
            }
            

				if ($query->num_rows) {
					$url = explode('=', $query->row['query']);

					if ($url[0] == 'product_id') {
						$this->request->get['product_id'] = $url[1];
					}

					if ($url[0] == 'category_id') {
						if (!isset($this->request->get['path'])) {
							$this->request->get['path'] = $url[1];
						} else {
							$this->request->get['path'] .= '_' . $url[1];
						}
					}

					if ($url[0] == 'manufacturer_id') {
						$this->request->get['manufacturer_id'] = $url[1];
					}


            if ($url[0] == 'story_id') {
                $this->request->get['story_id'] = (int) $url[1];
                unset($this->request->get['route']);
                break;
            }
            if ($url[0] == 'story_tag_id') {
                $this->request->get['story_tag_id'] = (int) $url[1];
                unset($this->request->get['route']);
                break;
            }
            
					if ($url[0] == 'information_id') {
						$this->request->get['information_id'] = $url[1];
					}

					if ($query->row['query'] && $url[0] != 'information_id' && $url[0] != 'manufacturer_id' && $url[0] != 'category_id' && $url[0] != 'product_id') {
						$this->request->get['route'] = $query->row['query'];
					}
				} else {
					$this->request->get['route'] = 'error/not_found';

					break;
				}
			}

			if (!isset($this->request->get['route'])) {

            if ($stories_keyword && $this->request->get['_route_'] ==  $stories_keyword) {
                $this->request->get['route'] =  'stories/index';
            } else
            if (isset($this->request->get['story_id'])) {
                $this->request->get['route'] = 'stories/show';
            } else
            if (isset($this->request->get['story_tag_id'])) {
                $this->request->get['route'] = 'stories/tag';
            }
            
				if (isset($this->request->get['product_id'])) {
					$this->request->get['route'] = 'product/product';
				} elseif (isset($this->request->get['path'])) {
					$this->request->get['route'] = 'product/category';
				} elseif (isset($this->request->get['manufacturer_id'])) {
					$this->request->get['route'] = 'product/manufacturer/info';
				} elseif (isset($this->request->get['information_id'])) {
					$this->request->get['route'] = 'information/information';
				}
			}
		}
	}

	public function rewrite($link) {
		$url_info = parse_url(str_replace('&amp;', '&', $link));

		$url = '';

		$data = array();

		parse_str($url_info['query'], $data);

            $data2 = $data;
            

		foreach ($data as $key => $value) {
			if (isset($data['route'])) {
				if (($data['route'] == 'product/product' && $key == 'product_id') || (($data['route'] == 'product/manufacturer/info' || $data['route'] == 'product/product') && $key == 'manufacturer_id') || ($data['route'] == 'information/information' && $key == 'information_id') || ($data['route'] == 'stories/show' && $key == 'story_id') || ($data['route'] == 'stories/tag' && $key == 'story_tag_id')) {
					$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = '" . $this->db->escape($key . '=' . (int)$value) . "'");

            $use_original_table = null !== self::$use_original_table ? self::$use_original_table : true;
            if (!$use_original_table) {
                $query2 = $this->db->query("SELECT * FROM " . DB_PREFIX . "burnengine_url_alias WHERE `query` = '" . $key . '=' . (int) $value . "' AND language_id = " . $this->language_id);
                if ($query2->num_rows or !self::$use_original_table_fallback) {
                    $query = $query2;
                }
            }
            


            if ($query->num_rows && ($data['route'] == 'stories/show' || $data['route'] == 'stories/tag')) {
                if (($stories_settings = $this->config->get('stories_settings')) && !empty($stories_settings['keyword'])) {
                    $url .= '/' . $stories_settings['keyword'] . '/' . $query->row['keyword'];
                    unset($data[$key]);
                    continue;
                }
            }
            
					if ($query->num_rows && $query->row['keyword']) {
						$url .= '/' . $query->row['keyword'];

						unset($data[$key]);
					}

            } elseif (isset($data['route']) && $data['route'] == 'stories/index') {
                if (($stories_settings = $this->config->get('stories_settings')) && !empty($stories_settings['keyword'])) {
                    $url .=  '/' . $stories_settings['keyword'];
                    unset($data[$key]);
                }
            
				} elseif ($key == 'path') {
					$categories = explode('_', $value);

					foreach ($categories as $category) {
						
            $use_original_table = null !== self::$use_original_table ? self::$use_original_table : true;
            if (!$use_original_table) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "burnengine_url_alias WHERE `query` = 'category_id=" . (int) $category . "' AND language_id = " . $this->language_id);
                if (!$query->num_rows && self::$use_original_table_fallback) {
                    $use_original_table = true;
                }
            }
            if ($use_original_table) {
                $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "url_alias WHERE `query` = 'category_id=" . (int)$category . "'");
            }
            

						if ($query->num_rows && $query->row['keyword']) {
							$url .= '/' . $query->row['keyword'];
						} else {
							$url = '';

							break;
						}
					}

					unset($data[$key]);
				}
			}
		}

		if ($url) {
			unset($data['route']);

			$query = '';

			if ($data) {
				foreach ($data as $key => $value) {
					$query .= '&' . rawurlencode((string)$key) . '=' . rawurlencode((is_array($value) ? http_build_query($value) : (string)$value));
				}

				if ($query) {
					$query = '?' . str_replace('&', '&amp;', trim($query, '&'));
				}
			}


            $url = '/' . $this->url_prefix . ltrim($url, '/');
            
			return $url_info['scheme'] . '://' . $url_info['host'] . (isset($url_info['port']) ? ':' . $url_info['port'] : '') . str_replace('/index.php', '', $url_info['path']) . $url . $query;
		} else {
			return $link;
		}
	}
}
