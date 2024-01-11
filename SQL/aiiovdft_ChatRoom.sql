-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 11, 2024 at 08:32 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aiiovdft_ChatRoom`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat_reference`
--

CREATE TABLE `chat_reference` (
  `combo_id` varchar(100) NOT NULL,
  `chat_id` varchar(50) NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `sender` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chat_reference`
--

INSERT INTO `chat_reference` (`combo_id`, `chat_id`, `receiver`, `sender`) VALUES
('7sh438fhw935', '7sh438fhw935', 'group', 'abc'),
('abcefg', '098765', 'efg', 'abc'),
('abcxyz', '123456', 'xyz', 'abc'),
('efgabc', '098765', 'abc', 'efg'),
('efgxyz', '098123', 'xyz', 'efg'),
('ht2949858295', '7sh438fhw935', 'group', 'xyz'),
('xyzabc', '123456', 'abc', 'xyz'),
('xyzefg', '098123', 'efg', 'xyz');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` varchar(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `privacy` varchar(10) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `privacy`, `image`) VALUES
('7sh438fhw935', 'AI Group', 'private', 'images/image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` varchar(50) NOT NULL,
  `chat_id` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `sender_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `chat_id`, `message`, `timestamp`, `sender_id`) VALUES
('1698753890669', '098123', 'Hello, I am well', '2023-10-31 12:04:50', 'xyz'),
('1698754201898', '098123', 'Hello', '2023-10-31 12:10:01', 'xyz'),
('1698754264379', '098123', 'How are you?', '2023-10-31 12:11:04', 'xyz'),
('1698754296108', '123456', 'Hello, My name is Munim. What is yours?', '2023-10-31 12:11:36', 'xyz'),
('1698754658799', '098123', 'Hello', '2023-10-31 12:17:38', 'efg'),
('1698754663709', '098123', 'My name is mahmoud', '2023-10-31 12:17:43', 'efg'),
('1698813915370', '098765', 'Hello', '2023-11-01 04:45:15', 'abc'),
('1698814054320', '098765', 'Im Ibrahim', '2023-11-01 04:47:34', 'abc'),
('1698814108595', '098765', 'Whats your name', '2023-11-01 04:48:28', 'abc'),
('1698814762620', '098765', 'H%', '2023-11-01 04:59:22', 'abc'),
('1698814779275', '098765', 'H?', '2023-11-01 04:59:39', 'abc'),
('1698814909095', '098765', 'hello', '2023-11-01 05:01:49', 'abc'),
('1698814920037', '123456', 'hello', '2023-11-01 05:02:00', 'abc'),
('1698815052574', '098765', 'H?', '2023-11-01 05:04:12', 'abc'),
('1698815125692', '098765', 'What\'s your name?', '2023-11-01 05:05:25', 'abc'),
('1698815226257', '098765', 'Helllo\'', '2023-11-01 05:07:06', 'abc'),
('1698815332226', '098765', 'Hell?', '2023-11-01 05:08:52', 'abc'),
('1698815343266', '098765', '#and .   $%^@4', '2023-11-01 05:09:03', 'abc'),
('1698815556554', '098765', 'Hello\'', '2023-11-01 05:12:36', 'abc'),
('1698815654867', '098765', 'Hello\'', '2023-11-01 05:14:14', 'abc'),
('1698816843559', '098765', 'Hello', '2023-11-01 05:34:03', 'efg'),
('1698817138837', '098765', 'Helllllo', '2023-11-01 05:38:58', 'efg'),
('1698817249575', '098765', 'Helllooo', '2023-11-01 05:40:49', 'efg'),
('1698817913035', '098765', 'Hello', '2023-11-01 05:51:53', 'abc'),
('1698817939151', '098765', 'how\'s your day?', '2023-11-01 05:52:19', 'efg'),
('1698817952852', '098765', 'I\'m good', '2023-11-01 05:52:32', 'abc'),
('1698817959843', '098765', 'Well', '2023-11-01 05:52:39', 'efg'),
('1698818343726', '098765', 'Hello', '2023-11-01 05:59:03', 'efg'),
('1698818388667', '098765', 'Hellllllooo', '2023-11-01 05:59:48', 'efg'),
('1698818427777', '098765', 'Hello, hello', '2023-11-01 06:00:27', 'abc'),
('1698818434556', '098765', 'How are you?', '2023-11-01 06:00:34', 'efg'),
('1698818441044', '098765', 'I\'m fine', '2023-11-01 06:00:41', 'abc'),
('1698818449526', '098765', 'How are you doing?', '2023-11-01 06:00:49', 'abc'),
('1698818456399', '098765', 'I am also doing well', '2023-11-01 06:00:56', 'efg'),
('1698852294164', '098765', 'Hello', '2023-11-01 15:24:54', 'abc'),
('1698852306641', '098765', 'Hello to you too.', '2023-11-01 15:25:06', 'efg'),
('1698852534053', '098765', 'Woooohoooooo', '2023-11-01 15:28:54', 'abc'),
('1698852551525', '098765', 'Well well well', '2023-11-01 15:29:11', 'abc'),
('1698852556245', '098765', 'Ahaaaaa', '2023-11-01 15:29:16', 'efg'),
('1698853744287', '098765', 'hello', '2023-11-01 15:49:04', 'efg'),
('1699423465729', '098765', 'hello', '2023-11-08 06:04:25', 'efg'),
('1699423609188', '098765', 'hello', '2023-11-08 06:06:49', 'abc'),
('1699423646378', '098765', 'Hello', '2023-11-08 06:07:26', 'abc'),
('1699425126121', '098765', 'Hello', '2023-11-08 06:32:06', 'abc'),
('1699425163520', '098765', 'S', '2023-11-08 06:32:43', 'abc'),
('1699425168112', '098765', '☺️', '2023-11-08 06:32:48', 'abc'),
('1699425261630', '098765', 'Can we meet on https://meet.google.com/tjj-gecm-pim', '2023-11-08 06:34:21', 'abc'),
('1699440076616', '098123', 'Hello', '2023-11-08 10:41:16', 'xyz'),
('1699440122442', '098123', 'Hello', '2023-11-08 10:42:02', 'efg'),
('1699440139382', '098123', '☺️', '2023-11-08 10:42:19', 'efg'),
('1699451998527', '123456', 'hello', '2023-11-08 13:59:59', 'xyz'),
('1699454266849', '123456', 'hello', '2023-11-08 14:37:46', 'abc'),
('1699454275696', '123456', 'hello', '2023-11-08 14:37:56', 'xyz'),
('1699454289358', '123456', '☺️', '2023-11-08 14:38:09', 'abc'),
('1701586315474', '', 'Hello', '2023-12-03 06:51:55', 'abc'),
('1701586344497', '', 'Hello', '2023-12-03 06:52:24', 'abc'),
('1701586473371', '098765', 'Hello', '2023-12-03 06:54:33', 'abc'),
('1701586636266', '098765', 'Hello', '2023-12-03 06:57:16', 'abc'),
('1701586791279', '098765', 'Hola', '2023-12-03 06:59:51', 'abc'),
('1701586814189', '098765', 'Holllla', '2023-12-03 07:00:14', 'abc'),
('1701586969702', '098765', 'Hello', '2023-12-03 07:02:49', 'abc'),
('1701587002437', '098765', 'Well Well Well', '2023-12-03 07:03:22', 'abc'),
('1701587015351', '098765', 'I see you', '2023-12-03 07:03:35', 'efg'),
('1701587033556', '098765', 'Hello', '2023-12-03 07:03:53', 'efg'),
('1701587045200', '098765', 'Class Functionality is a Success', '2023-12-03 07:04:05', 'abc'),
('1701587045719', '098765', '', '2023-12-03 07:04:05', 'abc'),
('1701587060555', '098765', '', '2023-12-03 07:04:20', 'abc'),
('1701603884043', '098765', 'J', '2023-12-03 11:44:44', 'abc'),
('1701603894898', '098765', 'We\'ll', '2023-12-03 11:44:54', 'abc'),
('1701603926368', '098765', 'Hello', '2023-12-03 11:45:26', 'abc'),
('1701603931865', '098765', 'Mhmmmm', '2023-12-03 11:45:31', 'abc'),
('1701603931866', '7sh438fhw935', 'Hello, My name is Ame', '2023-12-03 14:10:29', 'abc'),
('1701603931867', '7sh438fhw935', 'Hello Ame, my name is munim', '2023-12-03 12:45:42', 'efg'),
('1701603931868', '7sh438fhw935', 'Welcome to the AI group', '2023-12-03 12:45:42', 'efg'),
('1701603931869', '7sh438fhw935', 'Hello Everyone', '2023-12-03 12:51:32', 'xyz'),
('1701603931870', '7sh438fhw935', ':)', '2023-12-03 12:45:42', 'xyz'),
('1701603931871', '7sh438fhw935', 'Nice to meet you all', '2023-12-03 12:45:42', 'abc'),
('1701612690287', '7sh438fhw935', 'Well Well Well', '2023-12-03 14:11:30', 'abc'),
('1701612708003', '7sh438fhw935', 'c\'mon', '2023-12-03 14:11:48', 'abc'),
('1701612712842', '7sh438fhw935', 'Billy', '2023-12-03 14:11:52', 'abc'),
('1701612746055', '7sh438fhw935', ':(', '2023-12-03 14:12:26', 'abc'),
('1701612900894', '7sh438fhw935', 'Hello', '2023-12-03 14:15:00', 'abc'),
('1701612903623', '7sh438fhw935', 'Hello', '2023-12-03 14:15:03', 'abc'),
('1701612905101', '7sh438fhw935', '', '2023-12-03 14:15:05', 'abc'),
('1701612908985', '7sh438fhw935', 'Hello', '2023-12-03 14:15:08', 'abc'),
('1701612912852', '7sh438fhw935', ':)', '2023-12-03 14:15:12', 'abc'),
('1701612916549', '7sh438fhw935', ':::)', '2023-12-03 14:15:16', 'abc'),
('1701612920912', '7sh438fhw935', '4:', '2023-12-03 14:15:20', 'abc'),
('1701612929701', '7sh438fhw935', ' 255745364836', '2023-12-03 14:15:29', 'abc'),
('1701613211627', '7sh438fhw935', 'Ola', '2023-12-03 14:20:11', 'xyz'),
('1701613226375', '7sh438fhw935', 'Hello', '2023-12-03 14:20:26', 'abc'),
('1701613376601', '7sh438fhw935', 'Yooow', '2023-12-03 14:22:56', 'xyz'),
('1701613391968', '7sh438fhw935', ';)', '2023-12-03 14:23:12', 'xyz'),
('1701682677439', '7sh438fhw935', '\\ 255756363637', '2023-12-04 09:37:57', 'abc');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `row` int(10) NOT NULL,
  `id` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`row`, `id`, `username`, `email`, `password`, `role`, `status`) VALUES
(1, 'abc', 'ibrahimame', 'ame.ibrahim@yahoo.com', 'hello123', 'student', 'offline'),
(2, 'efg', 'mahmoud', 'mahmoud@yahoo.com', 'hello123', 'teacher', 'online'),
(3, 'xyz', 'abdulmunim', 'abdulmunim@yahoo.com', 'hello123', 'student', 'offline');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat_reference`
--
ALTER TABLE `chat_reference`
  ADD PRIMARY KEY (`combo_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `row` (`row`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `row` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
