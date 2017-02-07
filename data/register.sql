-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 register 的数据库结构
CREATE DATABASE IF NOT EXISTS `register` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `register`;


-- 导出  表 register.checkregister 结构
CREATE TABLE IF NOT EXISTS `checkregister` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `telphone` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- 正在导出表  register.checkregister 的数据：~19 rows (大约)
/*!40000 ALTER TABLE `checkregister` DISABLE KEYS */;
INSERT INTO `checkregister` (`id`, `username`, `password`, `telphone`) VALUES
	(2, 'weww', 'wre3', ''),
	(3, 'werw', '3242', ''),
	(4, '324', '32423', ''),
	(5, 'ewr', 'rwer', ''),
	(6, '5345', '453', ''),
	(7, '35435', 'sddfs', ''),
	(8, '', '', ''),
	(9, 'wew3rr4', 'wewrer', ''),
	(10, '111', '2222', ''),
	(11, 'qqqq', '232', ''),
	(12, 'aaa', 'qqqq', ''),
	(13, '222', '111', ''),
	(14, '333', '111', ''),
	(15, '444', '111', '{2}'),
	(16, '55', '11', ''),
	(17, '555', 'aaa', '{2}'),
	(18, 'qq', 'qq', '{2}'),
	(19, '111111', '', ''),
	(20, '11111', '111qqqqqqq', '13660245810'),
	(21, '111111111', '111111a', '13660245810');
/*!40000 ALTER TABLE `checkregister` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
