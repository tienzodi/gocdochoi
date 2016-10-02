<?php
class DB {
	private $adaptor;

	public function __construct($adaptor, $hostname, $username, $password, $database, $port = NULL) {
		$class = 'DB\\' . $adaptor;

		if (class_exists($class)) {
			$this->adaptor = new $class($hostname, $username, $password, $database, $port);
		} else {
			throw new \Exception('Error: Could not load database adaptor ' . $adaptor . '!');
		}
	}

	public function query($sql, $params = array()) {

            static $cache_db;

			if (null === $cache_db && class_exists('TB_Engine') && TB_Engine::hasInstance() && TB_Engine::instance()->isExtensionInstalled('oc_optimizations')) {
				$cache_db = TB_Engine::instance()->getExtension('oc_optimizations')->getModel('default')->getCache(version_compare(VERSION, '2.2.0.0', '>=') ? $this->adaptor : $this->db);
			}

            if (false !== $cache_db && null !== $cache_db) {
                $result = $cache_db->getResult($sql);
	            if (null !== $result) {
		            return $result;
	            }
            }
            
		return $this->adaptor->query($sql, $params);
	}

	public function escape($value) {
		return $this->adaptor->escape($value);
	}

	public function countAffected() {
		return $this->adaptor->countAffected();
	}

	public function getLastId() {
		return $this->adaptor->getLastId();
	}
	
	public function connected() {
		return $this->adaptor->connected();
	}
}