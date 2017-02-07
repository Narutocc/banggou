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

-- 导出 goods 的数据库结构
CREATE DATABASE IF NOT EXISTS `goods` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `goods`;


-- 导出  表 goods.goodsdatalist 结构
CREATE TABLE IF NOT EXISTS `goodsdatalist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bigImg` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `discount` varchar(50) NOT NULL,
  `msg` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `originPrice` varchar(50) NOT NULL,
  `smallImg` varchar(200) NOT NULL,
  `redLine` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8 COMMENT='商品列表数据';

-- 正在导出表  goods.goodsdatalist 的数据：~78 rows (大约)
/*!40000 ALTER TABLE `goodsdatalist` DISABLE KEYS */;
INSERT INTO `goodsdatalist` (`id`, `bigImg`, `name`, `discount`, `msg`, `price`, `originPrice`, `smallImg`, `redLine`) VALUES
	(1, '../img/maoyi1.jpg', '米郎骑士', '1.8折', '韩版纯棉三色拼接圆领套头毛衣针织', '￥65', '￥358', '../img/maoyi1.1.jpg,../img/maoyi1.2.jpg,../img/maoyi1.3.jpg', ''),
	(4, '../img/maoyi2.jpg', '雅圣利', '2.7折', '男士毛衣', '￥80', '￥299', '../img/maoyi2.1.jpg,../img/maoyi2.2.jpg,../img/maoyi2.3.jpg,../img/maoyi2.4.jpg,../img/maoyi2.5.jpg', ''),
	(5, '../img/maoyi3.jpg', 'METERSBONWE', '4.1折', ' 男绞花设计长袖毛衫', '￥99', '￥239', '../img/maoyi3.1.jpg', '明星同款'),
	(6, '../img/maoyi4.jpg', 'METERSBONWE', '3.5折', '男满身几何提花长袖毛衫', '￥69', '￥199', '../img/maoyi4.1.jpg,../img/maoyi4.2.jpg,../img/maoyi4.3.jpg,../img/maoyi4.4.jpg,../img/maoyi4.5.jpg', '每满300减100'),
	(7, '../img/maoyi5.jpg', 'ME&CITY', '6折', '男纯羊绒毛衫', '￥359', '￥599', '../img/maoyi5.1.jpg,../img/maoyi5.2.jpg,../img/maoyi5.3.jpg,../img/maoyi5.4.jpg', '纯羊绒'),
	(8, '../img/maoyi6.jpg', 'METERSBONWE', '3.5折', '女撞色提花套头毛衫', '￥59', '￥169', '../img/maoyi6.1.jpg,../img/maoyi6.2.jpg,../img/maoyi6.3.jpg', '每满300减100'),
	(9, '../img/maoyi7.jpg', 'ME＆CITY', '2.2折', '女纯羊绒毛开衫', '￥259', '￥1199', '../img/maoyi7.1.jpg,../img/maoyi7.2.jpg', '纯羊绒'),
	(10, '../img/maoyi8.jpg', 'METERSBONWE', '4.1折', '【秋冬新品】女多方案趣味图案套头', '￥99', '￥239', '../img/maoyi8.1.jpg,../img/maoyi8.2.jpg', '每满300减100'),
	(11, '../img/maoyi9.jpg', 'ME＆CITY', '5折', '女式简洁V领羊毛针织套头衫', '￥249', '￥499', '../img/maoyi9.1.jpg', ''),
	(12, '../img/maoyi10.jpg', 'METERSBONWE', '4折', '男长袖毛衫', '￥79', '￥199', '../img/maoyi10.1.jpg', '每满300减100'),
	(13, '../img/maoyi11.jpg', 'METERSBONWE', '3.5折', '【秋冬新品】男长袖毛衫', '￥69', '￥199', '../img/maoyi11.1.jpg,../img/maoyi11.2.jpg', '每满300减100'),
	(14, '../img/maoyi12.jpg', 'METERSBONWE', '2.2折', '女毛织开衫', '￥59', '￥269', '../img/maoyi12.1.jpg', ''),
	(15, '../img/maoyi13.jpg', 'METERSBONWE', '2.3折', '男提花星形图案套头毛衫', '￥55', '￥239', '../img/maoyi13.1.jpg', ''),
	(16, '../img/maoyi14.jpg', 'ME＆CITY', '3.3折', '女纯羊绒毛织开衫', '￥199', '￥599', '../img/maoyi14.1.jpg,../img/maoyi14.2.jpg', '纯羊绒'),
	(17, '../img/maoyi15.jpg', 'METERSBONWE', '3.3折', '女仿两件式学院派套头毛衫', '￥89', '￥269', '../img/maoyi15.1.jpg', ''),
	(18, '../img/maoyi16.jpg', '米郎骑士', '2.2折', '英伦复古混纺套头高领男士毛衣针织', '￥89', '￥399', '../img/maoyi16.1.jpg,../img/maoyi16.2.jpg', ''),
	(19, '../img/maoyi17.jpg', 'ME＆CITY', '1.2折', '男长袖毛衫', '￥59', '￥499', '../img/maoyi17.1.jpg,../img/maoyi17.2.jpg', '每满300减100'),
	(20, '../img/maoyi18.jpg', 'METERSBONWE', '2.5折', '男长袖毛衫', '￥49', '￥199', '../img/maoyi18.1.jpg,../img/maoyi18.2.jpg', ''),
	(21, '../img/maoyi19.jpg', 'METERSBONWE', '3.5折', '女长袖毛衫', '￥59', '￥169', '../img/maoyi19.1.jpg,../img/maoyi19.2.jpg,../img/maoyi19.3.jpg,../img/maoyi19.4.jpg,../img/maoyi19.5.jpg', '每满300减100'),
	(22, '../img/maoyi20.jpg', 'METERSBONWE', '3.7折', '男几何提花长袖毛衫', '￥89', '￥239', '../img/maoyi20.1.jpg,../img/maoyi20.2.jpg', ''),
	(23, '../img/maoyi21.jpg', 'METERSBONWE', '3.5折', '男拼衬衫领色块组合长袖毛衫', '￥69', '￥199', '../img/maoyi21.1.jpg', '每满300减100'),
	(24, '../img/maoyi22.jpg', 'METERSBONWE', '3.7折', '男圆领纯羊绒套头毛衫', '￥329', '￥899', '../img/maoyi22.1.jpg,../img/maoyi22.2.jpg,../img/maoyi22.3.jpg,../img/maoyi22.4.jpg', '情侣款'),
	(25, '../img/maoyi23.jpg', 'METERSBONWE', '3.5折', '女肌理爱心糖果色长袖毛衫', '￥59', '￥169', '../img/maoyi23.1.jpg', '每满300减100'),
	(26, '../img/maoyi24.jpg', 'METERSBONWE', '3.5折', '女套头毛衣', '￥69', '￥199', '../img/maoyi24.1.jpg', '每满300减100'),
	(27, '../img/maoyi25.jpg', 'ME＆CITY', '2折', '男黑白格纹提花毛衫', '￥99', '￥499', '../img/maoyi25.1.jpg', ''),
	(28, '../img/maoyi26.jpg', 'METERSBONWE', '3折', '男套头毛衣', '￥59', '￥199', '../img/maoyi26.1.jpg,../img/maoyi26.2.jpg', ''),
	(29, '../img/maoyi27.jpg', 'METERSBONWE', '3.5折', '男长袖毛衫', '￥69', '￥199', '../img/maoyi27.1.jpg,../img/maoyi27.2.jpg,../img/maoyi27.3.jpg', '每满300减100'),
	(30, '../img/maoyi28.jpg', 'METERSBONWE', '2折', '男前片拼粗绞花V领易护理羊毛长袖', '￥69', '￥339', '../img/maoyi28.1.jpg,../img/maoyi28.2.jpg', ''),
	(31, '../img/maoyi29.jpg', 'METERSBONWE', '2折', '女长袖毛衫', '￥39', '￥199', '../img/maoyi29.1.jpg,../img/maoyi29.2.jpg,../img/maoyi29.3.jpg,../img/maoyi29.4.jpg', ''),
	(32, '../img/maoyi30.jpg', 'METERSBONWE', '6折', '男几何图形提花长袖毛衫', '￥119', '￥199', '../img/maoyi30.1.jpg,../img/maoyi30.2.jpg,../img/maoyi30.3.jpg,../img/maoyi30.4.jpg', ''),
	(33, '../img/maoyi31.jpg', 'METERSBONWE', '3.5折', '男长袖毛衫', '￥59', '￥169', '../img/maoyi31.1.jpg,../img/maoyi31.2.jpg', '每满300减100'),
	(34, '../img/maoyi32.jpg', 'METERSBONWE', '2.6折', '男基本高品质圆领长袖毛衫', '￥79', '￥299', '../img/maoyi32.1.jpg,../img/maoyi32.2.jpg,../img/maoyi32.3.jpg,../img/maoyi32.4.jpg,../img/maoyi32.5.jpg', '每满300减100'),
	(35, '../img/maoyi33.jpg', 'METERSBONWE', '3.5折', '男长袖毛衫', '￥69', '￥199', '../img/maoyi33.1.jpg,../img/maoyi33.2.jpg', '每满300减100'),
	(36, '../img/maoyi34.jpg', 'ME＆CITY', '2折', '男几何民俗圆领毛衫', '￥99', '￥499', '../img/maoyi34.1.jpg', ''),
	(37, '../img/maoyi35.jpg', 'METERSBONWE', '3.5折', '【秋冬新品】男套头毛衣', '￥69', '￥199', '../img/maoyi35.1.jpg,../img/maoyi35.2.jpg,../img/maoyi35.3.jpg,../img/maoyi35.4.jpg', '每满300减100'),
	(38, '../img/maoyi36.jpg', 'METERSBONWE', '3.5折', '女长袖毛衫', '￥59', '￥169', '../img/maoyi36.1.jpg,../img/maoyi36.2.jpg', ''),
	(39, '../img/maoyi37.jpg', 'METERSBONWE', '4.7折', '男条纹色块组合长袖毛衫', '￥79', '￥169', '../img/maoyi37.1.jpg,../img/maoyi37.2.jpg,../img/maoyi37.3.jpg', ''),
	(40, '../img/maoyi38.jpg', 'METERSBONWE', '2.3折', '女渐变绞花套头毛衫', '￥45', '￥199', '../img/maoyi38.1.jpg', ''),
	(41, '../img/maoyi39.jpg', '雅圣利', '2.9折', '男士羊毛衫', '￥115', '￥399', '../img/maoyi39.1.jpg,../img/maoyi39.2.jpg,../img/maoyi39.3.jpg', ''),
	(42, '../img/maoyi40.jpg', '雅圣利', '3.5折', '男套头毛衣', '￥69', '￥199', '../img/maoyi40.1.jpg', ''),
	(43, '../img/my1.jpg', 'METERSBONWE', '5折', '【春季新品】男几何图形提花长袖毛', '￥99', '￥199', '../img/my1.1.jpg,../img/my1.2.jpg,../img/my1.3.jpg,../img/my1.4.jpg', ''),
	(44, '../img/my2.jpg', 'METERSBONWE', '3折', '男毛织开衫', '￥59', '￥199', '../img/my2.1.jpg,../img/my2.2.jpg,../img/my2.3.jpg', ''),
	(45, '../img/my3.jpg', '米郎骑士', '2.1折', '左肩四条杆纯棉圆领百搭套头毛衣针', '￥76', '￥369', '../img/my3.1.jpg,../img/my3.2.jpg,../img/my3.3.jpg,../img/my3.4.jpg,../img/my3.5.jpg', ''),
	(46, '../img/my4.jpg', 'METERSBONWE', '3.5折', '【秋冬新品】女长袖毛衫', '￥59', '￥169', '../img/my4.1.jpg,../img/my4.2.jpg,../img/my4.3.jpg', ''),
	(47, '../img/my5.jpg', 'ME＆CITY', '2.6折', '女士纯羊绒毛织开衫', '￥369', '￥1369', '../img/my5.1.jpg,../img/my5.2.jpg,../img/my5.3.jpg', ''),
	(48, '../img/my6.jpg', 'ME＆CITY', '2折', '男五角星绒感提花毛衫', '￥99', '￥499', '../img/my6.1.jpg', ''),
	(49, '../img/my7.jpg', 'ME＆CITY', '2折', '男长袖毛衫', '￥79', '￥239', '../img/my7.1.jpg', '纯羊绒'),
	(50, '../img/my8.jpg', 'METERSBONWE', '2.5折', '女钉珠套头毛衫', '￥59', '￥239', '../img/my8.1.jpg,../img/my8.2.jpg', ''),
	(51, '../img/my9.jpg', 'METERSBONWE', '1.2折', '男长袖毛衫', '￥49', '￥339', '../img/my9.1.jpg', '每满300减100'),
	(52, '../img/my10.jpg', 'ME＆CITY', '1.5折', '男商务撞色长袖毛织开衫', '￥59', '￥339', '../img/my10.1.jpg', ''),
	(53, '../img/my11.jpg', 'METERSBONWE', '1.5折', '男长袖毛衫', '￥59', '￥199', '../img/my11.1.jpg,../img/my11.2.jpg', ''),
	(54, '../img/my12.jpg', 'METERSBONWE', '2.5折', '男学院感撞色袖领V开领毛织开衫', '￥59', '￥239', '../img/my12.1.jpg,../img/my12.2.jpg,../img/my12.3.jpg', ''),
	(55, '../img/my13.jpg', 'METERSBONWE', '2.5折', '女长袖毛衫', '￥59', '￥199', '../img/my13.1.jpg,../img/my13.2.jpg,../img/my13.3.jpg', ''),
	(56, '../img/my14.jpg', 'METERSBONWE', '2.3折', '女宽松长款毛织开衫', '￥69', '￥299', '../img/my14.1.jpg,../img/my14.2.jpg,../img/my14.3.jpg,../img/my14.4.jpg', ''),
	(57, '../img/my15.jpg', 'METERSBONWE', '3.3折', '男圆领纯羊绒套头毛衫（女）', '￥299', '￥899', '../img/my15.1.jpg,../img/my15.2.jpg,../img/my15.3.jpg,../img/my15.4.jpg', '情侣款'),
	(58, '../img/my16.jpg', 'ME＆CITY', '3.3折', '男长袖毛衫', '￥59', '￥499', '../img/my16.1.jpg', ''),
	(59, '../img/my17.jpg', 'METERSBONWE', '4.1折', '女撞色毛织开衫', '￥139', '￥399', '../img/my17.1.jpg,../img/my17.2.jpg,../img/my17.3.jpg,../img/my17.4.jpg,../img/my17.5.jpg', '每满300减100'),
	(60, '../img/my18.jpg', 'METERSBONWE', '3.5折', '男套头毛衣', '￥69', '￥199', '../img/my18.1.jpg,../img/my18.2.jpg', ''),
	(61, '../img/my19.jpg', 'ME＆CITY', '3.3折', '【秋冬新品】男士羊绒开衫', '￥199', '￥599', '../img/my19.1.jpg', ''),
	(62, '../img/my20.jpg', '米郎骑士', '2.5折', '韩版纯棉假两件衬衫领纯色套头毛衣', '￥98', '￥399', '../img/my20.1.jpg,../img/my20.2.jpg,../img/my20.3.jpg,../img/my20.4.jpg', ''),
	(63, '../img/my21.jpg', 'METERSBONWE', '3折', '女渐变绞花套头毛衫', '￥59', '￥199', '../img/my21.1.jpg', ''),
	(64, '../img/my22.jpg', 'METERSBONWE', '2.5折', '女提花拉链装饰长袖毛衫', '￥59', '￥239', '../img/my22.1.jpg,../img/my22.2.jpg', ''),
	(65, '../img/my23.jpg', 'METERSBONWE', '3.5折', '【秋冬新品】男长袖毛衫', '￥59', '￥169', '../img/my23.1.jpg', ''),
	(66, '../img/my24.jpg', 'METERSBONWE', '3折', '女长袖毛衫', '￥59', '￥199', '../img/my24.1.jpg', ''),
	(67, '../img/my25.jpg', 'METERSBONWE', '7折', '【秋冬新品】男条形码印花圆领长袖', '￥139', '￥199', '../img/my25.1.jpg,../img/my25.2.jpg,../img/my25.3.jpg', ''),
	(68, '../img/my26.jpg', 'METERSBONWE', '2.3折', '女长袖毛衫袖', '￥99', '￥499', '../img/my26.1.jpg', ''),
	(69, '../img/my27.jpg', 'ME＆CITY', '2.3折', '女套头毛衫', '￥99', '￥499', '../img/my27.1.jpg,../img/my27.2.jpg,../img/my27.3.jpg', ''),
	(70, '../img/my28.jpg', 'ME＆CITY', '1.3折', '女绞花套头毛衫', '￥39', '￥299', '../img/my28.1.jpg', ''),
	(71, '../img/my29.jpg', '米郎骑士', '2.4折', '英伦复古条纹编织套头高领男士毛衣', '￥109', '￥459', '../img/my29.1.jpg,../img/my29.2.jpg,../img/my29.3.jpg', ''),
	(72, '../img/my30.jpg', 'ME＆CITY', '2.2折', '男士毛织西便装', '￥129', '￥599', '../img/my30.1.jpg,../img/my30.2.jpg', ''),
	(73, '../img/my31.jpg', 'ME＆CITY', '1.5折', '男棉麻材质圆领毛衫', '￥59', '￥399', '../img/my31.1.jpg,../img/my31.2.jpg', ''),
	(74, '../img/my32.jpg', 'ME＆CITY', '1.2折', '男长袖毛衫', '￥59', '￥499', '../img/my32.1.jpg', ''),
	(75, '../img/my33.jpg', 'ME＆CITY', '1.2折', '男毛织开衫', '￥49', '￥399', '../img/my33.1.jpg,../img/my33.2.jpg', ''),
	(76, '../img/my34.jpg', 'METERSBONWE', '3.5折', '男拼衬衫领色块组合长袖毛衫', '￥69', '￥199', '../img/my34.1.jpg', ''),
	(77, '../img/my35.jpg', 'METERSBONWE', '2.6折', '女长袖毛衫', '￥69', '￥269', '../img/my35.1.jpg,../img/my35.2.jpg,../img/my35.3.jpg', ''),
	(78, '../img/my36.jpg', 'METERSBONWE', '2折', '男绒感提花毛衫', '￥79', '￥399', '../img/my36.1.jpg', ''),
	(79, '../img/my37.jpg', 'ME＆CITY', '2折', '男黑白千鸟格提花毛衫', '￥99', '￥499', '../img/my37.1.jpg', ''),
	(80, '../img/my38.jpg', 'ME＆CITY', '1.4折', '女长袖毛织开衫', '￥49', '￥348', '../img/my38.1.jpg,../img/my38.2.jpg,../img/my38.3.jpg,../img/my38.4.jpg', ''),
	(81, '../img/my39.jpg', 'ME＆CITY', '2.2折', '【春季新品】男肌理细条毛衫', '￥89', '￥399', '../img/my39.1.jpg,../img/my39.2.jpg', ''),
	(82, '../img/my40.jpg', 'ME＆CITY', '3折', '女提花套头毛衫', '￥59', '￥199', '../img/my40.1.jpg,../img/my40.2.jpg', '');
/*!40000 ALTER TABLE `goodsdatalist` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
