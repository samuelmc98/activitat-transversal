-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2020 a las 17:48:24
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_cursa`
--
CREATE DATABASE IF NOT EXISTS `bd_cursa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_cursa`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `id_categoria` int(11) NOT NULL,
  `Categoria` enum('0-10','10-16','16-32','32-50','50-100','Discapacitado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_inscripcion`
--

CREATE TABLE `tbl_inscripcion` (
  `id_inscripcion` int(11) NOT NULL,
  `dorsal_inscripcion` int(4) NOT NULL,
  `Pagada_inscripcion` enum('Si','No') NOT NULL,
  `Categoria` enum('0-10','10-16','16-32','32-50','50-100','Discapacitado') NOT NULL,
  `id_participante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_participante`
--

CREATE TABLE `tbl_participante` (
  `id_participante` int(11) NOT NULL,
  `nombre_participante` varchar(50) NOT NULL,
  `apellido1_participante` varchar(50) NOT NULL,
  `apellido2_participante` varchar(50) NOT NULL,
  `DNI_participante` char(9) NOT NULL,
  `email_participante` varchar(250) NOT NULL,
  `Sexo_Participante` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_participante`
--

INSERT INTO `tbl_participante` (`id_participante`, `nombre_participante`, `apellido1_participante`, `apellido2_participante`, `DNI_participante`, `email_participante`, `Sexo_Participante`) VALUES
(1, '', '', '', '', '', 'Home'),
(2, '', '', '', '', '', 'Home'),
(3, '', '', '', '', '', 'Home'),
(4, '', '', '', '', '', 'Home'),
(5, '', '', '', '', '', 'Home'),
(6, '', '', '', '12345678F', '', 'Home'),
(7, '', '', '', '', '', 'Home');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD PRIMARY KEY (`id_inscripcion`),
  ADD UNIQUE KEY `Categoria` (`Categoria`,`id_participante`),
  ADD KEY `id_participante` (`id_participante`);

--
-- Indices de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD PRIMARY KEY (`id_participante`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  MODIFY `id_inscripcion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  MODIFY `id_participante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD CONSTRAINT `tbl_inscripcion_ibfk_1` FOREIGN KEY (`id_participante`) REFERENCES `tbl_participante` (`id_participante`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
