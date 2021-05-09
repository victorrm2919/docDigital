-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 09, 2021 at 11:18 PM
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
  `password` varchar(60) NOT NULL,
  `fechaCreate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `nombres`, `apellidos`, `email`, `password`, `fechaCreate`) VALUES
(2, 'Victor', 'Ruiz', 'victor@email.com', '$2y$10$EEp7gh0v7IDMvPoyNe.sNOjFTW9ehxB9TuGKgM2sqs8PrjepWXAvK', '2021-05-08'),
(3, 'Juan', 'Perez', 'j@email.com', '$2y$10$gPd.tWT0/6NYZiM49T3hpuJqQzpPDqriaYjRahraMz.uy7cOj..fW', '2021-05-09'),
(4, 'asdasd', 'asdasd', 'asd@asd.asd', '$2y$10$AmWJDrVVBzRmkUXhJz963e9HVRW/pdrFiIcutEtQiV5qKtuzBjiW.', '2021-05-09'),
(5, 'Victor', 'Morales', 'v@email.com', '$2y$10$lH.caT/P9IcWQHRrzPmIReu8DBQNhzlfxfEotQSlFF.nTULGEofQS', '2021-05-09');

-- --------------------------------------------------------

--
-- Table structure for table `especialidades`
--

CREATE TABLE `especialidades` (
  `nombre` varchar(40) DEFAULT NULL,
  `clave` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `especialidades`
--

INSERT INTO `especialidades` (`nombre`, `clave`) VALUES
('Anatomía Patológica', 'ANAPAT'),
('Angiología y Cirugía Vascular', 'ANCIRV'),
('Anestesiología ', 'ANEST'),
('Cardiología Intervencionista', 'CAINTE'),
('Cardiología', 'CARDI'),
('Cardiología Intervencionista', 'CARDIN'),
('Cirugía Plástica y Reconstructiva', 'CIPLRE'),
('Cirugía General', 'CIRGRL'),
('Cirugía Oncológica', 'CIRONC'),
('Cirugía Pediátrica ', 'CIRPED'),
('Dermatología', 'DERMA'),
('Endoscopia', 'ENDOS'),
('Gastroenterología', 'GASTRO'),
('Ginegología y Obstetricia', 'GINECO'),
('Hematología', 'HEMAT'),
('Infectología', 'INFECT'),
('Medicina Aeroespacial', 'MEDAER'),
('Medicina del Enfermo en Estado Crítico ', 'MEDCRT'),
('Medicina Interna', 'MEDINT'),
('Medicina de Rehabilitación', 'MEDREH'),
('Nefrología', 'NEFRO'),
('Neumología', 'NEUMO'),
('Neumología', 'NEUMOL'),
('Neurología', 'NEURO'),
('Oftalmología', 'OFTAL'),
('Oncología Médica', 'ONCMED'),
('Oncología Pediátrica', 'ONCPED'),
('Ortopedia', 'ORTOP'),
('Otorrinolaringología', 'OTORR'),
('Patología Clínica ', 'PATCLI'),
('Pediatría', 'PEDIA'),
('Psiquiatría General', 'PSIGRL'),
('Radiología e Imagen', 'RADIMG'),
('Radio-Oncología', 'RADONC'),
('Urología', 'UROL'),
(NULL, NULL);

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
  `costoCons` int(3) NOT NULL,
  `clabe` double NOT NULL,
  `url_firma` varchar(20) NOT NULL,
  `id_doc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expedientes_doc`
--

INSERT INTO `expedientes_doc` (`id_exp_doc`, `curp`, `rfc`, `hc`, `telPer`, `direc`, `cp`, `col`, `edo`, `mun`, `telCons`, `uni`, `titulo`, `cedProf`, `esp`, `cedEsp`, `costoCons`, `clabe`, `url_firma`, `id_doc`) VALUES
(56, 'RUMV951029HMCZRC03', 'RUMV951029', 'VA7', 5559874876, 'Cjon Purepechas 5', 56607, 'CULTURAS DE MÉXICO', 'MÉXICO', 'CHALCO', 5559874876, 'UTEL Universidad', 'Sistemas', 12216548, '', 0, 50, 2.3657987544654656e17, 'VicRui-2.jpg', 2),
(57, 'SDHFGHJSDGFJHSDFGH', 'SDHFGHJSDG', '156', 6565656565, 'asdjahjsdvj', 56600, 'CAMPESTRE SANTA CRUZ', 'MÉXICO', 'CHALCO', 3556465465, 'hasgdyagsdhjgfashd', 'askjdgasgfd', 26545465, 'ANEST', 23132465, 55, 5.646549878978642e17, 'JuaPer-3.jpg', 3),
(58, 'SDASDJHAGSDAHDJGAH', 'SDASDJHAGS', '321', 6545454748, 'asjdvhgas', 56000, 'TEZOYUCA', 'MÉXICO', 'TEZOYUCA', 5465456454, 'jashdkhaasdhjk', 'hasjkdgjasdgjhasgd', 23165487, '', 0, 55, 6.514658978976547e17, 'asdasd-4.jpg', 4),
(59, 'HSDFHJSGDFJHGGSDFH', 'HSDFHJSGDF', '546', 6556446546, 'ajksdhahdj', 56007, 'SAN FELIPE', 'MÉXICO', 'TEZOYUCA', 5465454564, 'ahsgdhjagsdhjg', 'hjkasdghjasgd', 56456489, '', 0, 50, 5.3126549878979686e17, 'VicMor-5.jpg', 5);

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

-- --------------------------------------------------------

--
-- Table structure for table `perfiles`
--

CREATE TABLE `perfiles` (
  `id_perfil` int(11) NOT NULL,
  `doctor` int(11) NOT NULL,
  `clave_esp` varchar(10) DEFAULT NULL,
  `descr` varchar(100) DEFAULT 'Sin descripcion',
  `foto` varchar(25) NOT NULL DEFAULT 'default-avatar.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `perfiles`
--

INSERT INTO `perfiles` (`id_perfil`, `doctor`, `clave_esp`, `descr`, `foto`) VALUES
(20, 2, NULL, 'Sin descripcion', 'default-avatar.png'),
(21, 3, 'ANEST', 'Sin descripcion', 'default-avatar.png'),
(22, 4, '', 'Sin descripcion', 'default-avatar.png'),
(23, 5, '', 'Sin descripcion', 'default-avatar.png');

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
  ADD UNIQUE KEY `clave` (`clave`);

--
-- Indexes for table `expedientes_doc`
--
ALTER TABLE `expedientes_doc`
  ADD PRIMARY KEY (`id_exp_doc`),
  ADD KEY `id_doc` (`id_doc`);

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
-- Indexes for table `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id_perfil`),
  ADD KEY `id_doctor` (`doctor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `expedientes_doc`
--
ALTER TABLE `expedientes_doc`
  MODIFY `id_exp_doc` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `expedientes_pac`
--
ALTER TABLE `expedientes_pac`
  MODIFY `id_exp` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `expedientes_doc`
--
ALTER TABLE `expedientes_doc`
  ADD CONSTRAINT `expedientes_doc_ibfk_1` FOREIGN KEY (`id_doc`) REFERENCES `doctor` (`id`);

--
-- Constraints for table `expedientes_pac`
--
ALTER TABLE `expedientes_pac`
  ADD CONSTRAINT `expedientes_pac_ibfk_1` FOREIGN KEY (`id_pac`) REFERENCES `paciente` (`id`);

--
-- Constraints for table `perfiles`
--
ALTER TABLE `perfiles`
  ADD CONSTRAINT `perfiles_ibfk_1` FOREIGN KEY (`doctor`) REFERENCES `doctor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
