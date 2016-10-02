<?php
class Url {
	private $url;

            private static $url_map = null;
            public static $current_language_id = null;
            public static $enable_cache = null;
            
	private $ssl;
	private $rewrite = array();

	public function __construct($url, $ssl = '') {
		$this->url = $url;
		$this->ssl = $ssl;
	}
	
	public function addRewrite($rewrite) {
		$this->rewrite[] = $rewrite;
	}

	public function link($route, $args = '', $secure = false) {
		if ($this->ssl && $secure) {
			$url = $this->ssl . 'index.php?route=' . $route;
		} else {
			$url = $this->url . 'index.php?route=' . $route;
		}
		
		if ($args) {
			if (is_array($args)) {
				$url .= '&amp;' . http_build_query($args);
			} else {
				$url .= str_replace('&', '&amp;', '&' . ltrim($args, '&'));
			}
		}
		

            if (self::$enable_cache) {
                if (null === self::$current_language_id) {
                    self::$current_language_id = TB_Engine::ocConfig('config_language_id');
                }
                if (null === self::$url_map || self::$current_language_id != TB_Engine::ocConfig('config_language_id')) {
                    $cache_key = 'url_map_' . TB_Engine::ocConfig('config_store_id') . '_' . TB_Engine::ocConfig('config_language_id');
                    self::$url_map = (array) TB_Engine::OcRegistry()->get('tbEngine')->getCacheVar($cache_key, null, array(), null, true);
                    TB_Engine::OcRegistry()->set('url_map', self::$url_map);
                    TB_Engine::OcRegistry()->set('save_url_map', false);
                }
                if (null !== self::$url_map && isset(self::$url_map[$url])) {
                    return self::$url_map[$url];
                }
            }
            $original_url = $url;
            
		foreach ($this->rewrite as $rewrite) {
			$url = $rewrite->rewrite($url);
		}
		

            if (self::$enable_cache && null !== self::$url_map && $original_url != $url) {
                self::$url_map[$original_url] = $url;
                TB_Engine::OcRegistry()->set('url_map', self::$url_map);
                TB_Engine::OcRegistry()->set('save_url_map', true);
            }
            
		return $url; 
	}
}