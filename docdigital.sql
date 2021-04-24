-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 24, 2021 at 04:30 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `docdigital`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `nombres`, `apellidos`, `email`, `password`) VALUES
(50, 'Victor', 'Ruiz', 'victorruiz@gmail.com', '$2y$10$oUj2a2XVaZyRL1kcB52kTOPYJjotHANEhhMq9IolQnZdQZltiaAnK'),
(51, 'Victor', 'Ruiz', 'victorru@gmail.com', '$2y$10$NFBoxPwPp4nMe5ytf5pm.uiwmpbjhL1vDavU8sIW3hOZFfM0jZT86'),
(52, 'Vick', 'Ru', 'vr@gmail.com', '$2y$10$ovUck.cX/XdfyIzK8GrQG.58Ja5vAiJQflQ5HXcqXnLMS0KC7r0lu'),
(53, 'juan', 'peres', 'asd@sad.asd', '$2y$10$v9rwgTOQu7oV0K4MQYJnqeTV2WPPBJeRUvNFvRpq0PCronBU8ijBS'),
(54, 'Juan', 'Perez', 'email@endjb.com', '$2y$10$sDKqPyfDXoAwrLm0V85ua.w6MefelpQv0F5DJiq./prGzAq5On6hS'),
(55, 'Victor', 'Ruiz', 'victor@email.com', '$2y$10$NrhB41sfX31g6suuFet.tOtz9kTFidYb.9V7NXFIbRrzQ6IScZtLu'),
(56, 'Victor', 'Ruiz M', 'victorr@gmail.com', '$2y$10$3bjrUACEMyqyMryBFHsPQ.gAtagHyi0DTEokjFWrUNVL/8zh1IDW2'),
(57, 'v', 'v', 'c@gmail.com', '$2y$10$JOuxGtUTlqQqwy9sZM.SOe./Ar8DrX6zp7WfkqBug6Lcwnss3G5yK'),
(58, 'victor', 'v', 'Vic@email.com', '$2y$10$mcPyvRD3meF/KkP43HArge8brmiQnmmw4H6Sg645OfuwlTKEqo/Lm'),
(59, 'victor', 'ruiz', 'victor@gmail.com', '$2y$10$ocWgappsVHmaKZqP8kP.je0QIbiwIPlJZGnjc0b1t0DfXKEgdNpf6'),
(60, 'victor', 'ruiz', 'v@wenje.com', '$2y$10$BsQXMTih54jXxv5goJSw1.LoH1PcWE6BXNrpLv18V2NXCTg4nX99i'),
(61, 'askjfdb', 'sjhfdasehj', 'asd@asdwhedvhjg.com', '$2y$10$1gEslw6EA0w6EtecutVzMuySe/2QQr5B9EhPe4y/DJpClbO4w4HaW'),
(62, 'asdasdawe', 'adwqeqwe', 'qweq@qweqwe.com', '$2y$10$lcqk20Lqzmvq1PVQwzCkduiU.tpCkaqlVgE5IKGA0IrzDjfy36WjO'),
(63, 'Victor', 'Ruiz', 'victorR@email.com', '$2y$10$RpGHOAxAbiIRjGy9eTgEMuE5Rf0qyNSEo9KxO9nc4RBu5C2INk.4G'),
(64, 'perez', 'juan', 'p@email.com', '$2y$10$XTIAuvcoixRd7.jrru/M5eGIATz7zVrBOtt2Ta4m0Blpy845Z8UEe'),
(65, 'ajhsdhasjvdhjvasg', 'hjagsdhjasdhj', 'sjkkfb@asnbdvasb.com', '$2y$10$bIVnWa4N48ysD6zKRNv9xepsl6ChJAfvGRncGI4pzLJOgekHs6Saq');

-- --------------------------------------------------------

--
-- Table structure for table `especialidades`
--

CREATE TABLE `especialidades` (
  `Id_esp` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `clave` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `especialidades`
--

INSERT INTO `especialidades` (`Id_esp`, `nombre`, `clave`) VALUES
(1, 'Anestesiología ', 'ANEST'),
(2, 'Anatomía Patológica', 'ANAPAT'),
(3, 'Cardiología', 'CARDI'),
(4, 'Cardiología Intervencionista', 'CARDIN'),
(5, 'Cirugía Pediátrica ', 'CIRPED'),
(6, 'Cirugía General', 'CIRGRL'),
(7, 'Cirugía Plástica y Reconstructiva', 'CIPLRE'),
(8, 'Angiología y Cirugía Vascular', 'ANCIRV'),
(9, 'Dermatología', 'DERMA'),
(10, 'Endoscopia', 'ENDOS'),
(11, 'Gastroenterología', 'GASTRO'),
(12, 'Ginegología y Obstetricia', 'GINECO'),
(13, 'Hematología', 'HEMAT'),
(14, 'Infectología', 'INFECT'),
(15, 'Medicina Aeroespacial', 'MEDAER'),
(16, 'Medicina de Rehabilitación', 'MEDREH'),
(17, 'Medicina Interna', 'MEDINT'),
(18, 'Nefrología', 'NEFRO'),
(19, 'Neurología', 'NEURO'),
(20, 'Neumología', 'NEUMO'),
(21, 'Oftalmología', 'OFTAL'),
(22, 'Ortopedia', 'ORTOP'),
(23, 'Otorrinolaringología', 'OTORR'),
(24, 'Patología Clínica ', 'PATCLI'),
(25, 'Pediatría', 'PEDIA'),
(26, 'Psiquiatría General', 'PSIGRL'),
(27, 'Radiología e Imagen', 'RADIMG'),
(28, 'Medicina del Enfermo en Estado Crítico ', 'MEDCRT'),
(29, 'Urología', 'UROL'),
(30, 'Cardiología Intervencionista', 'CAINTE'),
(31, 'Neumología', 'NEUMOL'),
(32, 'Hematología', 'HEMAT'),
(33, 'Cirugía Oncológica', 'CIRONC'),
(34, 'Oncología Médica', 'ONCMED'),
(35, 'Oncología Pediátrica', 'ONCPED'),
(36, 'Radio-Oncología', 'RADONC');

-- --------------------------------------------------------

--
-- Table structure for table `expedientes_doc`
--

CREATE TABLE `expedientes_doc` (
  `id_exp_doc` int(9) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `rfc` varchar(10) NOT NULL,
  `hc` varchar(3) NOT NULL,
  `telPer` double NOT NULL,
  `direc` varchar(60) NOT NULL,
  `cp` int(5) NOT NULL,
  `col` varchar(30) NOT NULL,
  `edo` varchar(20) NOT NULL,
  `mun` varchar(30) NOT NULL,
  `telCons` double NOT NULL,
  `uni` varchar(60) NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `cedProf` double NOT NULL,
  `esp` varchar(50) DEFAULT NULL,
  `cedEsp` double DEFAULT NULL,
  `url_firma` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `expedientes_pac`
--

CREATE TABLE `expedientes_pac` (
  `id_exp` int(9) NOT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `estadoCivil` varchar(8) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `edoNac` varchar(4) DEFAULT NULL,
  `munNac` varchar(40) DEFAULT NULL,
  `dir` varchar(60) DEFAULT NULL,
  `cp` int(5) DEFAULT NULL,
  `col` varchar(40) DEFAULT NULL,
  `edo` varchar(25) DEFAULT NULL,
  `mun` varchar(40) DEFAULT NULL,
  `telP` double DEFAULT NULL,
  `eduPro` varchar(20) DEFAULT NULL,
  `ocu` varchar(20) DEFAULT NULL,
  `prof` varchar(60) DEFAULT NULL,
  `relig` varchar(30) DEFAULT NULL,
  `refPer` varchar(60) DEFAULT NULL,
  `telRefP` double DEFAULT NULL,
  `id_pac` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expedientes_pac`
--

INSERT INTO `expedientes_pac` (`id_exp`, `sexo`, `estadoCivil`, `fechaNac`, `edad`, `edoNac`, `munNac`, `dir`, `cp`, `col`, `edo`, `mun`, `telP`, `eduPro`, `ocu`, `prof`, `relig`, `refPer`, `telRefP`, `id_pac`) VALUES
(2, '', '', '1995-10-29', 25, 'CHI', 'ASCENSIÓN', 'asd54as1d45', 56607, 'CULTURAS DE MÉXICO', 'MÉXICO', 'ASCENSIÓN', 2411646544, 'sec', 'desemp', 'sdfsdfsdfsdf', 'sdfsdfsdf', 'sdfsdfsdf', 5618456484, 12),
(3, 'M', 'cas', '2020-04-23', 1, 'CHI', 'ALLENDE', 'asdas 5654asd', 56607, 'CULTURAS DE MÉXICO', 'MÉXICO', 'ALLENDE', 5665465454, 'sec', 'desemp', 'ahjdjasghdh', 'asdasd', 'tgdhgasfdhgasd', 4154565456, 6);

-- --------------------------------------------------------

--
-- Table structure for table `paciente`
--

CREATE TABLE `paciente` (
  `id` int(11) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paciente`
--

INSERT INTO `paciente` (`id`, `nombres`, `apellidos`, `email`, `password`) VALUES
(6, 'v', 'v', 'v@email.com', '$2y$10$wcyfdIPs.f48BG8JN2wX4uh46t7R5tPUAK/mRCwnL0yFHiXw.X0Zi'),
(7, 'Vcitor', 'Ap', 'f@gmail.com', '$2y$10$OEYQFyOqOWTmhvXqvoW7/ewhhqxWG0h8RyE0z4bU0RMJ/PcLTSgcC'),
(8, 'victor', 'ruiz', 'g@gamil.com', '$2y$10$n/su8fXdGrfDACtcKuxqGeNlBM0gT5fZcf6N9NjR1HHfVDEn.I/tC'),
(9, 'victor', 'ruiz', 'victor@gmail.com', '$2y$10$B.P5MslTi6QOUjh2osbgtetTp76eBv5OecG.vT9LCjFsWrEh3C63W'),
(10, 'victor', 'victor', 'v@gmail.com', '$2y$10$uz8qE27Rxash6SIa0Ha79OVHv090Qkp6pCGqrsOnt7Kih8mYLkcJS'),
(11, 'hasd', 'hjasdhj', 'skjdb@asdjk.com', '$2y$10$nICCQ98mjQee/yzLnv5x/u1iK/BzfSn3wF0QMFeR/735DD/cdgnJS'),
(12, 'Victor', 'Ruiz', 'victorRui@gmail.com', '$2y$10$nnzcU81Yk2GARGtH6yayEebwtnRcCv0T.2K5yFSc3eN5xGpI43t/u');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `especialidades`
--
ALTER TABLE `especialidades`
  ADD PRIMARY KEY (`Id_esp`);

--
-- Indexes for table `expedientes_doc`
--
ALTER TABLE `expedientes_doc`
  ADD PRIMARY KEY (`id_exp_doc`);

--
-- Indexes for table `expedientes_pac`
--
ALTER TABLE `expedientes_pac`
  ADD PRIMARY KEY (`id_exp`),
  ADD KEY `id_pac` (`id_pac`);

--
-- Indexes for table `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `especialidades`
--
ALTER TABLE `especialidades`
  MODIFY `Id_esp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `expedientes_doc`
--
ALTER TABLE `expedientes_doc`
  MODIFY `id_exp_doc` int(9) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expedientes_pac`
--
ALTER TABLE `expedientes_pac`
  MODIFY `id_exp` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `expedientes_pac`
--
ALTER TABLE `expedientes_pac`
  ADD CONSTRAINT `expedientes_pac_ibfk_1` FOREIGN KEY (`id_pac`) REFERENCES `paciente` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
