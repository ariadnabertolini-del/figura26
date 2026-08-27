import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

// ESTRUCTURA COMPLETA DE GRUPOS Y PAÍSES
const GRUPOS_DATA = [
  {
    nombre: '🅰️ GRUPO A',
    paises: [
      {
        nombre: '🇲🇽 México',
        jugadores: [
          { id: 'MEX 2', nombre: 'Luis Malagón', imagen:'./src/assets/mex/luis.png' , stock: 1},
          { id: 'MEX 3', nombre: 'Johan Vásquez', imagen: 'src/assets/mex/johan.png', stock: 0},
          { id: 'MEX 4', nombre: 'Jorge Sánchez',imagen: 'src/assets/mex/jorge.png', stock: 0 },
          { id: 'MEX 5', nombre: 'César Montes' ,imagen: 'src/assets/mex/cesar.png', stock: 0},
          { id: 'MEX 6', nombre: 'Jesús Gallardo' ,imagen: 'src/assets/mex/jesus.png', stock: 1},
          { id: 'MEX 7', nombre: 'Israel Reyes',imagen: 'src/assets/mex/israel.png' , stock: 2},
          { id: 'MEX 8', nombre: 'Diego Lainez' ,imagen: 'src/assets/mex/diego.png', stock: 1},
          { id: 'MEX 9', nombre: 'Carlos Rodríguez' ,imagen: 'src/assets/mex/carlos.png', stock: 1},
          { id: 'MEX 10', nombre: 'Edson Álvarez' ,imagen: 'src/assets/mex/edson.png', stock: 3},
          { id: 'MEX 11', nombre: 'Orbelín Pineda' ,imagen: 'src/assets/mex/orbelin.png', stock: 11},
          { id: 'MEX 12', nombre: 'Marcel Ruiz' ,imagen: 'src/assets/mex/marcel.png', stock: 0},
          { id: 'MEX 14', nombre: 'Érick Sánchez' ,imagen: 'src/assets/mex/erick.png', stock: 0},
          { id: 'MEX 15', nombre: 'Hirving Lozano' ,imagen: 'src/assets/mex/hirving.png', stock: 1},
          { id: 'MEX 16', nombre: 'Santiago Giménez' ,imagen: 'src/assets/mex/santiago.png', stock: 0},
          { id: 'MEX 17', nombre: 'Raúl Jiménez' ,imagen: 'src/assets/mex/raul.png', stock: 0},
          { id: 'MEX 18', nombre: 'Alexis Vega' ,imagen: 'src/assets/mex/alex.png', stock: 2},
          { id: 'MEX 19', nombre: 'Roberto Alvarado', imagen: 'src/assets/mex/roberto.png', stock: 2},
          { id: 'MEX 20', nombre: 'César Huerta' ,imagen: 'src/assets/mex/cesa.png', stock: 0},
        ],
      },
      {
        nombre: '🇿🇦 Sudáfrica',
        jugadores: [
          { id: 'RSA 2', nombre: 'Ronwen Williams', imagen:'src/assets/rsa/r.png', stock: 2},
          { id: 'RSA 3', nombre: 'Sipho Chaine' , imagen:'src/assets/rsa/si.png', stock: 1},
          { id: 'RSA 4', nombre: 'Aubrey Modiba' , imagen:'src/assets/rsa/a.png', stock: 3},
          { id: 'RSA 5', nombre: 'Samukele Kabini', imagen:'src/assets/rsa/s.png' , stock: 3},
          { id: 'RSA 6', nombre: 'Mbekezeli Mbokazi' , imagen:'src/assets/rsa/mb.png', stock: 1},
          { id: 'RSA 7', nombre: 'Khulumani Ndamane' , imagen:'src/assets/rsa/khu.png', stock: 0},
          { id: 'RSA 8', nombre: 'Siyabonga Ngezana' , imagen:'src/assets/rsa/siya.png', stock: 0},
          { id: 'RSA 9', nombre: 'Khuliso Mudau' , imagen:'src/assets/rsa/k.png', stock: 2},
          { id: 'RSA 10', nombre: 'Nkosinathi Sibisi' , imagen:'src/assets/rsa/siph.png', stock: 1},
          { id: 'RSA 11', nombre: 'Teboho Mokoena' , imagen:'src/assets/rsa/teb.png', stock: 1},
          { id: 'RSA 12', nombre: 'Thalente Mbatha' , imagen:'src/assets/rsa/tha.png', stock: 0},
          { id: 'RSA 14', nombre: 'Bathasi Aubaas' , imagen:'src/assets/rsa/bat.png', stock: 0},
          { id: 'RSA 15', nombre: 'Yaya Sithole' , imagen:'src/assets/rsa/yaya.png', stock: 1},
          { id: 'RSA 16', nombre: 'Sipho Mbule' , imagen:'src/assets/rsa/sip.png', stock: 2},
          { id: 'RSA 17', nombre: 'Lyle Foster' , imagen:'src/assets/rsa/ly.png', stock: 0},
          { id: 'RSA 18', nombre: 'Iqraam Rayners' , imagen:'src/assets/rsa/io.png', stock: 0},
          { id: 'RSA 19', nombre: 'Mohau Nkota' , imagen:'src/assets/rsa/m.png', stock: 1},
          { id: 'RSA 20', nombre: 'Oswin Appollis' , imagen:'src/assets/rsa/o.png', stock: 2},
        ],
      },
      {
        nombre: '🇰🇷 Corea del Sur',
        jugadores: [
          { id: 'KOR 2', nombre: 'Hyeon-woo Jo', imagen:'src/assets/kor/1.png' , stock: 3},
          { id: 'KOR 3', nombre: 'Seung-Gyu Kim' , imagen:'src/assets/kor/2.png', stock: 2},
          { id: 'KOR 4', nombre: 'Min-jae Kim' , imagen:'src/assets/kor/3.png', stock: 0},
          { id: 'KOR 5', nombre: 'Yu-min Cho' , imagen:'src/assets/kor/4.png', stock: 0},
          { id: 'KOR 6', nombre: 'Young-woo Seol' , imagen:'src/assets/kor/5.png', stock: 2},
          { id: 'KOR 7', nombre: 'Han-beom Lee' , imagen:'src/assets/kor/6.png', stock: 2},
          { id: 'KOR 8', nombre: 'Tae-seok Lee' , imagen:'src/assets/kor/7.png', stock: 0},
          { id: 'KOR 9', nombre: 'Myung-jae Lee' , imagen:'src/assets/kor/8.png', stock: 0},
          { id: 'KOR 10', nombre: 'Jae-sung Lee' , imagen:'src/assets/kor/9.png', stock: 0},
          { id: 'KOR 11', nombre: 'In-beom Hwang' , imagen:'src/assets/kor/10.png', stock: 1},
          { id: 'KOR 12', nombre: 'Kang-in Lee' , imagen:'src/assets/kor/11.png', stock: 0},
          { id: 'KOR 14', nombre: 'Seung-ho Paik' , imagen:'src/assets/kor/12.png', stock: 0},
          { id: 'KOR 15', nombre: 'Jens Castrop' , imagen:'src/assets/kor/13.png', stock: 1},
          { id: 'KOR 16', nombre: 'Dong-gyeong Lee' , imagen:'src/assets/kor/14.png', stock: 0},
          { id: 'KOR 17', nombre: 'Gue-sung Cho' , imagen:'src/assets/kor/15.png', stock: 0},
          { id: 'KOR 18', nombre: 'Heung-min Son' , imagen:'src/assets/kor/16.png', stock: 0},
          { id: 'KOR 19', nombre: 'Hee-chan Hwang' , imagen:'src/assets/kor/17.png', stock: 1},
          { id: 'KOR 20', nombre: 'Hyeon-Gyu Oh' , imagen:'src/assets/kor/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇿 Chequia',
        jugadores: [
          { id: 'CZE 2', nombre: 'Matej Kovar' , imagen:'src/assets/cze/1.png', stock: 2},
          { id: 'CZE 3', nombre: 'Jindrich Stanek' , imagen:'src/assets/cze/2.png', stock: 2},
          { id: 'CZE 4', nombre: 'Ladislav Krejci' , imagen:'src/assets/cze/3.png', stock: 1},
          { id: 'CZE 5', nombre: 'Vladimir Coufal' , imagen:'src/assets/cze/4.png', stock: 1},
          { id: 'CZE 6', nombre: 'Jaroslav Zeleny' , imagen:'src/assets/cze/5.png', stock: 2},
          { id: 'CZE 7', nombre: 'Tomas Holes' , imagen:'src/assets/cze/6.png', stock: 0},
          { id: 'CZE 8', nombre: 'David Zima' , imagen:'src/assets/cze/7.png', stock: 1},
          { id: 'CZE 9', nombre: 'Michal Sadilek' , imagen:'src/assets/cze/8.png', stock: 2},
          { id: 'CZE 10', nombre: 'Lukas Provod' , imagen:'src/assets/cze/9.png', stock: 2},
          { id: 'CZE 11', nombre: 'Lukas Cerv' , imagen:'src/assets/cze/10.png', stock: 0},
          { id: 'CZE 12', nombre: 'Tomas Soucek' , imagen:'src/assets/cze/11.png', stock: 2},
          { id: 'CZE 14', nombre: 'Pavel Sulc' , imagen:'src/assets/cze/12.png', stock: 2},
          { id: 'CZE 15', nombre: 'Matej Vydra' , imagen:'src/assets/cze/13.png', stock: 2},
          { id: 'CZE 16', nombre: 'Vasil Kusej' , imagen:'src/assets/cze/14.png', stock: 0},
          { id: 'CZE 17', nombre: 'Tomas Chory' , imagen:'src/assets/cze/15.png', stock: 1},
          { id: 'CZE 18', nombre: 'Vaclav Cerny' , imagen:'src/assets/cze/16.png', stock: 1},
          { id: 'CZE 19', nombre: 'Adam Hlozek' , imagen:'src/assets/cze/17.png', stock: 0},
          { id: 'CZE 20', nombre: 'Patrik Schick' , imagen:'src/assets/cze/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🅱️ GRUPO B',
    paises: [
      {
        nombre: '🇨🇦 Canadá',
        jugadores: [
          { id: 'CAN 2', nombre: 'Dayne St. Clair' , imagen:'src/assets/can/1.png', stock: 2},
          { id: 'CAN 3', nombre: 'Alphonso Davies' , imagen:'src/assets/can/2.png', stock: 0},
          { id: 'CAN 4', nombre: 'Alistair Johnston' , imagen:'src/assets/can/3.png', stock: 2},
          { id: 'CAN 5', nombre: 'Samuel Adekugbe' , imagen:'src/assets/can/4.png', stock: 0},
          { id: 'CAN 6', nombre: 'Richie Laryea' , imagen:'src/assets/can/5.png', stock: 1},
          { id: 'CAN 7', nombre: 'Derek Cornelius' , imagen:'src/assets/can/6.png', stock: 0},
          { id: 'CAN 8', nombre: 'Moïse Bombito' , imagen:'src/assets/can/7.png', stock: 3},
          { id: 'CAN 9', nombre: 'Kamal Miller' , imagen:'src/assets/can/8.png', stock: 0},
          { id: 'CAN 10', nombre: 'Stephen Eustáquio' , imagen:'src/assets/can/9.png', stock: 1},
          { id: 'CAN 11', nombre: 'Ismaël Koné' , imagen:'src/assets/can/10.png', stock: 0},
          { id: 'CAN 12', nombre: 'Jonathan Osorio' , imagen:'src/assets/can/11.png', stock: 3},
          { id: 'CAN 14', nombre: 'Jacob Shaffelburg' , imagen:'src/assets/can/12.png', stock: 0},
          { id: 'CAN 15', nombre: 'Mathieu Choinière' , imagen:'src/assets/can/13.png', stock: 1},
          { id: 'CAN 16', nombre: 'Niko Sigur' , imagen:'src/assets/can/14.png', stock: 1},
          { id: 'CAN 17', nombre: 'Tajon Buchanan' , imagen:'src/assets/can/15.png', stock: 0},
          { id: 'CAN 18', nombre: 'Liam Millar' , imagen:'src/assets/can/16.png', stock: 0},
          { id: 'CAN 19', nombre: 'Cyle Larin' , imagen:'src/assets/can/17.png', stock: 0},
          { id: 'CAN 20', nombre: 'Jonathan David' , imagen:'src/assets/can/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇭 Suiza',
        jugadores: [
          { id: 'SUI 2', nombre: 'Gregor Kobel', imagen:'src/assets/sui/1.png', stock: 2 },
          { id: 'SUI 3', nombre: 'Yvon Mvogo' , imagen:'src/assets/sui/2.png', stock: 2},
          { id: 'SUI 4', nombre: 'Manuel Akanji', imagen:'src/assets/sui/3.png' , stock: 3},
          { id: 'SUI 5', nombre: 'Ricardo Rodriguez' , imagen:'src/assets/sui/4.png', stock: 0},
          { id: 'SUI 6', nombre: 'Nico Elvedi' , imagen:'src/assets/sui/5.png', stock: 2},
          { id: 'SUI 7', nombre: 'Aurèle Amenda' , imagen:'src/assets/sui/6.png', stock: 0},
          { id: 'SUI 8', nombre: 'Silvan Widmer' , imagen:'src/assets/sui/7.png', stock: 2},
          { id: 'SUI 9', nombre: 'Granit Xhaka' , imagen:'src/assets/sui/8.png', stock: 1},
          { id: 'SUI 10', nombre: 'Denis Zakaria' , imagen:'src/assets/sui/9.png', stock: 5},
          { id: 'SUI 11', nombre: 'Remo Freuler' , imagen:'src/assets/sui/10.png', stock: 1},
          { id: 'SUI 12', nombre: 'Fabian Rieder' , imagen:'src/assets/sui/11.png', stock: 3},
          { id: 'SUI 14', nombre: 'Ardon Jashari' , imagen:'src/assets/sui/12.png', stock: 2},
          { id: 'SUI 15', nombre: 'Johan Manzambi' , imagen:'src/assets/sui/13.png', stock: 3},
          { id: 'SUI 16', nombre: 'Michel Aebischer' , imagen:'src/assets/sui/14.png', stock: 2},
          { id: 'SUI 17', nombre: 'Breel Embolo' , imagen:'src/assets/sui/15.png', stock: 2},
          { id: 'SUI 18', nombre: 'Ruben Vargas' , imagen:'src/assets/sui/16.png', stock: 0},
          { id: 'SUI 19', nombre: 'Dan Ndoye' , imagen:'src/assets/sui/17.png', stock: 1},
          { id: 'SUI 20', nombre: 'Zeki Amdouni' , imagen:'src/assets/sui/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇶🇦 Catar',
        jugadores: [
          { id: 'QAT 2', nombre: 'Meshaal Barsham' , imagen:'src/assets/qat/1.png', stock: 1},
          { id: 'QAT 3', nombre: 'Sultan Albrake' , imagen:'src/assets/qat/2.png', stock: 1},
          { id: 'QAT 4', nombre: 'Lucas Mendes' , imagen:'src/assets/qat/3.png', stock: 2},
          { id: 'QAT 5', nombre: 'Homam Ahmed' , imagen:'src/assets/qat/4.png', stock: 0},
          { id: 'QAT 6', nombre: 'Boualem Khoukhi' , imagen:'src/assets/qat/5.png', stock: 3},
          { id: 'QAT 7', nombre: 'Pedro Miguel' , imagen:'src/assets/qat/6.png', stock: 3},
          { id: 'QAT 8', nombre: 'Tarek Salman' , imagen:'src/assets/qat/7.png', stock: 2},
          { id: 'QAT 9', nombre: 'Mohammed Al-Mannai', imagen:'src/assets/qat/8.png' , stock: 0},
          { id: 'QAT 10', nombre: 'Karim Boudiaf' , imagen:'src/assets/qat/9.png', stock: 3},
          { id: 'QAT 11', nombre: 'Assim Madibo' , imagen:'src/assets/qat/10.png', stock: 3},
          { id: 'QAT 12', nombre: 'Ahmed Fatehi' , imagen:'src/assets/qat/11.png', stock: 2},
          { id: 'QAT 14', nombre: 'Mohammed Waad' , imagen:'src/assets/qat/12.png', stock: 1},
          { id: 'QAT 15', nombre: 'Abdulaziz Hatem' , imagen:'src/assets/qat/13.png', stock: 2},
          { id: 'QAT 16', nombre: 'Hassan Al-Haydos', imagen:'src/assets/qat/14.png' , stock: 0},
          { id: 'QAT 17', nombre: 'Edmilson Junior' , imagen:'src/assets/qat/15.png', stock: 2},
          { id: 'QAT 18', nombre: 'Akram Hassan Afif' , imagen:'src/assets/qat/16.png', stock: 2},
          { id: 'QAT 19', nombre: 'Ahmed Al-Ganehi' , imagen:'src/assets/qat/17.png', stock: 1},
          { id: 'QAT 20', nombre: 'Almoez Ali' , imagen:'src/assets/qat/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇧🇦 Bosnia y Herzegovina',
        jugadores: [
          { id: 'BIH 2', nombre: 'Nikola Vasilj' , imagen:'src/assets/bih/1.png', stock: 1},
          { id: 'BIH 3', nombre: 'Amer Dedić' , imagen:'src/assets/bih/2.png', stock: 0},
          { id: 'BIH 4', nombre: 'Sead Kolašinac' , imagen:'src/assets/bih/3.png', stock: 0},
          { id: 'BIH 5', nombre: 'Tarik Muharemović' , imagen:'src/assets/bih/4.png', stock: 2},
          { id: 'BIH 6', nombre: 'Nihad Mujakić', imagen:'src/assets/bih/5.png' , stock: 3},
          { id: 'BIH 7', nombre: 'Nikola Katić' , imagen:'src/assets/bih/6.png', stock: 0},
          { id: 'BIH 8', nombre: 'Amir Hadžiahmetović' , imagen:'src/assets/bih/7.png', stock: 1},
          { id: 'BIH 9', nombre: 'Benjamin Tahirović' , imagen:'src/assets/bih/8.png', stock: 1},
          { id: 'BIH 10', nombre: 'Armin Gigović' , imagen:'src/assets/bih/9.png', stock: 0},
          { id: 'BIH 11', nombre: 'Ivan Šunjić' , imagen:'src/assets/bih/10.png', stock: 0},
          { id: 'BIH 12', nombre: 'Ivan Bašić' , imagen:'src/assets/bih/11.png', stock: 0},
          { id: 'BIH 14', nombre: 'Dženis Burnić' , imagen:'src/assets/bih/12.png', stock: 2},
          { id: 'BIH 15', nombre: 'Esmir Bajraktarević' , imagen:'src/assets/bih/13.png', stock: 1},
          { id: 'BIH 16', nombre: 'Amar Memić' , imagen:'src/assets/bih/14.png', stock: 2},
          { id: 'BIH 17', nombre: 'Ermedin Demirović' , imagen:'src/assets/bih/15.png', stock: 0},
          { id: 'BIH 18', nombre: 'Edin Džeko' , imagen:'src/assets/bih/16.png', stock: 3},
          { id: 'BIH 19', nombre: 'Samed Baždar' , imagen:'src/assets/bih/17.png', stock: 0},
          { id: 'BIH 20', nombre: 'Haris Tabaković' , imagen:'src/assets/bih/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🅲 GRUPO C',
    paises: [
      {
        nombre: '🇧🇷 Brasil',
        jugadores: [
          { id: 'BRA 2', nombre: 'Alisson' , imagen:'src/assets/bra/1.png', stock: 1},
          { id: 'BRA 3', nombre: 'Bento' , imagen:'src/assets/bra/2.png', stock: 0},
          { id: 'BRA 4', nombre: 'Marquinhos' , imagen:'src/assets/bra/3.png', stock: 3},
          { id: 'BRA 5', nombre: 'Éder Militão' , imagen:'src/assets/bra/4.png', stock: 0},
          { id: 'BRA 6', nombre: 'Gabriel Magalhães' , imagen:'src/assets/bra/5.png', stock: 2},
          { id: 'BRA 7', nombre: 'Danilo' , imagen:'src/assets/bra/6.png', stock: 0},
          { id: 'BRA 8', nombre: 'Wesley' , imagen:'src/assets/bra/7.png', stock: 2},
          { id: 'BRA 9', nombre: 'Lucas Paquetá' , imagen:'src/assets/bra/8.png', stock: 0},
          { id: 'BRA 10', nombre: 'Casemiro' , imagen:'src/assets/bra/9.png', stock: 2},
          { id: 'BRA 11', nombre: 'Bruno Guimarães' , imagen:'src/assets/bra/10.png', stock: 0},
          { id: 'BRA 12', nombre: 'Luiz Henrique' , imagen:'src/assets/bra/11.png', stock: 1},
          { id: 'BRA 14', nombre: 'Vinícius Júnior' , imagen:'src/assets/bra/12.png', stock: 0},
          { id: 'BRA 15', nombre: 'Rodrygo' , imagen:'src/assets/bra/13.png', stock: 3},
          { id: 'BRA 16', nombre: 'João Pedro' , imagen:'src/assets/bra/14.png', stock: 0},
          { id: 'BRA 17', nombre: 'Matheus Cunha' , imagen:'src/assets/bra/15.png', stock: 2},
          { id: 'BRA 18', nombre: 'Gabriel Martinelli' , imagen:'src/assets/bra/16.png', stock: 0},
          { id: 'BRA 19', nombre: 'Raphinha' , imagen:'src/assets/bra/17.png', stock: 1},
          { id: 'BRA 20', nombre: 'Estêvão' , imagen:'src/assets/bra/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇲🇦 Marruecos',
        jugadores: [
          { id: 'MAR 2', nombre: 'Yassine Bounou' , imagen:'src/assets/mar/1.png', stock: 0},
          { id: 'MAR 3', nombre: 'Munir El Kajoui' , imagen:'src/assets/mar/2.png', stock: 1},
          { id: 'MAR 4', nombre: 'Achraf Hakimi' , imagen:'src/assets/mar/3.png', stock: 0},
          { id: 'MAR 5', nombre: 'Noussair Mazraoui' , imagen:'src/assets/mar/4.png', stock: 2},
          { id: 'MAR 6', nombre: 'Nayef Aguerd' , imagen:'src/assets/mar/5.png', stock: 1},
          { id: 'MAR 7', nombre: 'Romain Saïss' , imagen:'src/assets/mar/6.png', stock: 1},
          { id: 'MAR 8', nombre: 'Jawad El Yamiq' , imagen:'src/assets/mar/7.png', stock: 0},
          { id: 'MAR 9', nombre: 'Adam Masina' , imagen:'src/assets/mar/8.png', stock: 0},
          { id: 'MAR 10', nombre: 'Sofyan Amrabat' , imagen:'src/assets/mar/9.png', stock: 1},
          { id: 'MAR 11', nombre: 'Azzedine Ounahi' , imagen:'src/assets/mar/10.png', stock: 1},
          { id: 'MAR 12', nombre: 'Eliesse Ben Seghir' , imagen:'src/assets/mar/11.png', stock: 1},
          { id: 'MAR 14', nombre: 'Bilal El Khannouss' , imagen:'src/assets/mar/12.png', stock: 1},
          { id: 'MAR 15', nombre: 'Ismaël Saibari' , imagen:'src/assets/mar/13.png', stock: 0},
          { id: 'MAR 16', nombre: 'Youssef En-Nesyri' , imagen:'src/assets/mar/14.png', stock: 1},
          { id: 'MAR 17', nombre: 'Abde Ezzalzouli' , imagen:'src/assets/mar/15.png', stock: 0},
          { id: 'MAR 18', nombre: 'Soufiane Rahimi' , imagen:'src/assets/mar/16.png', stock: 1},
          { id: 'MAR 19', nombre: 'Brahim Díaz' , imagen:'src/assets/mar/17.png', stock: 0},
          { id: 'MAR 20', nombre: 'Ayoub El Kaabi' , imagen:'src/assets/mar/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇭🇹 Haití',
        jugadores: [
          { id: 'HAI 2', nombre: 'Johny Placide' , imagen:'src/assets/hai/1.png', stock: 1},
          { id: 'HAI 3', nombre: 'Carlens Arcus' , imagen:'src/assets/hai/2.png', stock: 2},
          { id: 'HAI 4', nombre: 'Martin Expérience' , imagen:'src/assets/hai/3.png', stock: 0},
          { id: 'HAI 5', nombre: 'Jean-Kévin Duverne' , imagen:'src/assets/hai/4.png', stock: 0},
          { id: 'HAI 6', nombre: 'Ricardo Adé' , imagen:'src/assets/hai/5.png', stock: 2},
          { id: 'HAI 7', nombre: 'Duke Lacroix' , imagen:'src/assets/hai/6.png', stock: 1},
          { id: 'HAI 8', nombre: 'Garven Metusala' , imagen:'src/assets/hai/7.png', stock: 0},
          { id: 'HAI 9', nombre: 'Hannes Delcroix' , imagen:'src/assets/hai/8.png', stock: 0},
          { id: 'HAI 10', nombre: 'Leverton Pierre' , imagen:'src/assets/hai/9.png', stock: 2},
          { id: 'HAI 11', nombre: 'Danley Jean Jacques' , imagen:'src/assets/hai/10.png', stock: 0},
          { id: 'HAI 12', nombre: 'Jean-Ricner Bellegarde' , imagen:'src/assets/hai/11.png', stock: 0},
          { id: 'HAI 14', nombre: 'Christopher Attys' , imagen:'src/assets/hai/12.png', stock: 0},
          { id: 'HAI 15', nombre: 'Derrick Etienne Jr.' , imagen:'src/assets/hai/13.png', stock: 0},
          { id: 'HAI 16', nombre: 'Josué Casimir' , imagen:'src/assets/hai/14.png', stock: 1},
          { id: 'HAI 17', nombre: 'Ruben Providence' , imagen:'src/assets/hai/15.png', stock: 0},
          { id: 'HAI 18', nombre: 'Duckens Nazon' , imagen:'src/assets/hai/16.png', stock: 0},
          { id: 'HAI 19', nombre: 'Louicius Deedson' , imagen:'src/assets/hai/17.png', stock: 0},
          { id: 'HAI 20', nombre: 'Frantzdy Pierrot' , imagen:'src/assets/hai/18.png', stock: 2},
        ],
      },
      {
        nombre: '🏴 Escocia',
        jugadores: [
          { id: 'SCO 2', nombre: 'Angus Gunn' , imagen:'src/assets/sco/1.png', stock: 0},
          { id: 'SCO 3', nombre: 'Jack Hendry' , imagen:'src/assets/sco/2.png', stock: 2},
          { id: 'SCO 4', nombre: 'Kieran Tierney' , imagen:'src/assets/sco/3.png', stock: 0},
          { id: 'SCO 5', nombre: 'Aaron Hickey' , imagen:'src/assets/sco/4.png', stock: 0},
          { id: 'SCO 6', nombre: 'Andrew Robertson' , imagen:'src/assets/sco/5.png', stock: 1},
          { id: 'SCO 7', nombre: 'Scott McKenna' , imagen:'src/assets/sco/6.png', stock: 1},
          { id: 'SCO 8', nombre: 'John Souttar' , imagen:'src/assets/sco/7.png', stock: 1},
          { id: 'SCO 9', nombre: 'Anthony Ralston' , imagen:'src/assets/sco/8.png', stock: 1},
          { id: 'SCO 10', nombre: 'Grant Hanley' , imagen:'src/assets/sco/9.png', stock: 0},
          { id: 'SCO 11', nombre: 'Scott McTominay' , imagen:'src/assets/sco/10.png', stock: 0},
          { id: 'SCO 12', nombre: 'Billy Gilmour' , imagen:'src/assets/sco/11.png', stock: 0},
          { id: 'SCO 14', nombre: 'Lewis Ferguson' , imagen:'src/assets/sco/12.png', stock: 1},
          { id: 'SCO 15', nombre: 'Ryan Christie' , imagen:'src/assets/sco/13.png', stock: 1},
          { id: 'SCO 16', nombre: 'Kenny McLean' , imagen:'src/assets/sco/14.png', stock: 0},
          { id: 'SCO 17', nombre: 'John McGinn' , imagen:'src/assets/sco/15.png', stock: 0},
          { id: 'SCO 18', nombre: 'Lyndon Dykes' , imagen:'src/assets/sco/16.png', stock: 0},
          { id: 'SCO 19', nombre: 'Che Adams' , imagen:'src/assets/sco/17.png', stock: 2},
          { id: 'SCO 20', nombre: 'Ben Gannon-Doak' , imagen:'src/assets/sco/18.png', stock: 1},
        ],
      },
    ],
  },
  {
    nombre: '🅳 GRUPO D',
    paises: [
      {
        nombre: '🇺🇸 Estados Unidos',
        jugadores: [
          { id: 'USA 2', nombre: 'Matt Freese' , imagen:'src/assets/usa/1.png', stock: 2},
          { id: 'USA 3', nombre: 'Chris Richards' , imagen:'src/assets/usa/2.png', stock: 0},
          { id: 'USA 4', nombre: 'Tim Ream' , imagen:'src/assets/usa/3.png', stock: 0},
          { id: 'USA 5', nombre: 'Mark McKenzie' , imagen:'src/assets/usa/4.png', stock: 3},
          { id: 'USA 6', nombre: 'Alex Freeman', imagen:'src/assets/usa/5.png' , stock: 0},
          { id: 'USA 7', nombre: 'Antonee Robinson' , imagen:'src/assets/usa/6.png', stock: 0},
          { id: 'USA 8', nombre: 'Tyler Adams' , imagen:'src/assets/usa/7.png', stock: 3},
          { id: 'USA 9', nombre: 'Tanner Tessmann' , imagen:'src/assets/usa/8.png', stock: 3},
          { id: 'USA 10', nombre: 'Weston McKennie' , imagen:'src/assets/usa/9.png', stock: 0},
          { id: 'USA 11', nombre: 'Christian Roldan' , imagen:'src/assets/usa/10.png', stock: 0},
          { id: 'USA 12', nombre: 'Timothy Weah' , imagen:'src/assets/usa/11.png', stock: 3},
          { id: 'USA 14', nombre: 'Diego Luna' , imagen:'src/assets/usa/12.png', stock: 2},
          { id: 'USA 15', nombre: 'Malik Tillman' , imagen:'src/assets/usa/13.png', stock: 3},
          { id: 'USA 16', nombre: 'Christian Pulisic' , imagen:'src/assets/usa/14.png', stock: 0},
          { id: 'USA 17', nombre: 'Brenden Aaronson' , imagen:'src/assets/usa/15.png', stock: 3},
          { id: 'USA 18', nombre: 'Ricardo Pepi' , imagen:'src/assets/usa/16.png', stock: 2},
          { id: 'USA 19', nombre: 'Haji Wright' , imagen:'src/assets/usa/17.png', stock: 3},
          { id: 'USA 20', nombre: 'Folarin Balogun' , imagen:'src/assets/usa/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇵🇾 Paraguay',
        jugadores: [
          { id: 'PAR 2', nombre: 'Roberto Fernández', imagen:'src/assets/par/1.png', stock: 1 },
          { id: 'PAR 3', nombre: 'Orlando Gill' , imagen:'src/assets/par/2.png', stock: 1},
          { id: 'PAR 4', nombre: 'Gustavo Gómez' , imagen:'src/assets/par/3.png', stock: 1},
          { id: 'PAR 5', nombre: 'Fabián Balbuena' , imagen:'src/assets/par/4.png', stock: 1},
          { id: 'PAR 6', nombre: 'Juan José Cáceres' , imagen:'src/assets/par/5.png', stock: 0},
          { id: 'PAR 7', nombre: 'Omar Alderete' , imagen:'src/assets/par/6.png', stock: 1},
          { id: 'PAR 8', nombre: 'Junior Alonso' , imagen:'src/assets/par/7.png', stock: 0},
          { id: 'PAR 9', nombre: 'Mathías Villasanti', imagen:'src/assets/par/8.png' , stock: 1},
          { id: 'PAR 10', nombre: 'Diego Gómez' , imagen:'src/assets/par/9.png', stock: 0},
          { id: 'PAR 11', nombre: 'Damián Bobadilla' , imagen:'src/assets/par/10.png', stock: 2},
          { id: 'PAR 12', nombre: 'Andrés Cubas' , imagen:'src/assets/par/11.png', stock: 1},
          { id: 'PAR 14', nombre: 'Matías Galarza Fonda' , imagen:'src/assets/par/12.png', stock: 2},
          { id: 'PAR 15', nombre: 'Julio Enciso' , imagen:'src/assets/par/13.png', stock: 0},
          { id: 'PAR 16', nombre: 'Alejandro Romero Gamarra' , imagen:'src/assets/par/14.png', stock: 1},
          { id: 'PAR 17', nombre: 'Miguel Almirón' , imagen:'src/assets/par/15.png', stock: 1},
          { id: 'PAR 18', nombre: 'Ramón Sosa' , imagen:'src/assets/par/16.png', stock: 1},
          { id: 'PAR 19', nombre: 'Ángel Romero' , imagen:'src/assets/par/17.png', stock: 2},
          { id: 'PAR 20', nombre: 'Antonio Sanabria' , imagen:'src/assets/par/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇦🇺 Australia',
        jugadores: [
          { id: 'AUS 2', nombre: 'Mathew Ryan' , imagen:'src/assets/aus/1.png', stock: 0},
          { id: 'AUS 3', nombre: 'Joe Gauci', imagen:'src/assets/aus/2.png' , stock: 0},
          { id: 'AUS 4', nombre: 'Harry Souttar' , imagen:'src/assets/aus/3.png', stock: 1},
          { id: 'AUS 5', nombre: 'Alessandro Circati' , imagen:'src/assets/aus/4.png', stock: 0},
          { id: 'AUS 6', nombre: 'Jordan Bos' , imagen:'src/assets/aus/5.png', stock: 2},
          { id: 'AUS 7', nombre: 'Aziz Behich' , imagen:'src/assets/aus/6.png', stock: 2},
          { id: 'AUS 8', nombre: 'Cameron Burgess' , imagen:'src/assets/aus/7.png', stock: 0},
          { id: 'AUS 9', nombre: 'Lewis Miller' , imagen:'src/assets/aus/8.png', stock: 0},
          { id: 'AUS 10', nombre: 'Milos Degenek' , imagen:'src/assets/aus/9.png', stock: 3},
          { id: 'AUS 11', nombre: 'Jackson Irvine' , imagen:'src/assets/aus/10.png', stock: 1},
          { id: 'AUS 12', nombre: 'Riley McGree' , imagen:'src/assets/aus/11.png', stock: 2},
          { id: 'AUS 14', nombre: "Aiden O'Neill" , imagen:'src/assets/aus/12.png', stock: 0},
          { id: 'AUS 15', nombre: 'Connor Metcalfe' , imagen:'src/assets/aus/13.png', stock: 0},
          { id: 'AUS 16', nombre: 'Patrick Yazbek' , imagen:'src/assets/aus/14.png', stock: 1},
          { id: 'AUS 17', nombre: 'Craig Goodwin' , imagen:'src/assets/aus/15.png', stock: 1},
          { id: 'AUS 18', nombre: 'Kusini Yengi' , imagen:'src/assets/aus/16.png', stock: 0},
          { id: 'AUS 19', nombre: 'Nestory Irankunda' , imagen:'src/assets/aus/17.png', stock: 0},
          { id: 'AUS 20', nombre: 'Mohamed Touré' , imagen:'src/assets/aus/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇹🇷 Turquía',
        jugadores: [
          { id: 'TUR 2', nombre: 'Uğurcan Çakır' , imagen:'src/assets/tur/1.png' , stock: 0},
          { id: 'TUR 3', nombre: 'Mert Müldür' , imagen:'src/assets/tur/2.png', stock: 1},
          { id: 'TUR 4', nombre: 'Zeki Çelik' , imagen:'src/assets/tur/3.png', stock: 0},
          { id: 'TUR 5', nombre: 'Abdülkerim Bardakcı', imagen:'src/assets/tur/4.png' , stock: 0},
          { id: 'TUR 6', nombre: 'Çağlar Söyüncü' , imagen:'src/assets/tur/5.png', stock: 0},
          { id: 'TUR 7', nombre: 'Merih Demiral' , imagen:'src/assets/tur/6.png', stock: 0},
          { id: 'TUR 8', nombre: 'Ferdi Kadıoğlu' , imagen:'src/assets/tur/7.png', stock: 2},
          { id: 'TUR 9', nombre: 'Kaan Ayhan' , imagen:'src/assets/tur/8.png', stock: 0},
          { id: 'TUR 10', nombre: 'İsmail Yüksek' , imagen:'src/assets/tur/9.png', stock: 0},
          { id: 'TUR 11', nombre: 'Hakan Çalhanoğlu' , imagen:'src/assets/tur/10.png', stock: 3},
          { id: 'TUR 12', nombre: 'Orkun Kökçü' , imagen:'src/assets/tur/11.png', stock: 1},
          { id: 'TUR 14', nombre: 'Arda Güler' , imagen:'src/assets/tur/12.png', stock: 0},
          { id: 'TUR 15', nombre: 'İrfan Can Kahveci' , imagen:'src/assets/tur/13.png', stock: 0},
          { id: 'TUR 16', nombre: 'Yunus Akgün' , imagen:'src/assets/tur/14.png', stock: 2},
          { id: 'TUR 17', nombre: 'Can Uzun' , imagen:'src/assets/tur/15.png', stock: 2},
          { id: 'TUR 18', nombre: 'Barış Alper Yılmaz' , imagen:'src/assets/tur/16.png', stock: 0},
          { id: 'TUR 19', nombre: 'Kerem Aktürkoğlu' , imagen:'src/assets/tur/17.png', stock: 0},
          { id: 'TUR 20', nombre: 'Kenan Yıldız' , imagen:'src/assets/tur/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🇪 GRUPO E',
    paises: [
      {
        nombre: '🇩🇪 Alemania',
        jugadores: [
          { id: 'GER 2', nombre: 'Marc-André ter Stegen' , imagen:'src/assets/ger/1.png', stock: 0},
          { id: 'GER 3', nombre: 'Jonathan Tah' , imagen:'src/assets/ger/2.png', stock: 1},
          { id: 'GER 4', nombre: 'David Raum' , imagen:'src/assets/ger/3.png', stock: 1},
          { id: 'GER 5', nombre: 'Nico Schlotterbeck' , imagen:'src/assets/ger/4.png', stock: 1},
          { id: 'GER 6', nombre: 'Antonio Rüdiger' , imagen:'src/assets/ger/5.png', stock: 0},
          { id: 'GER 7', nombre: 'Waldemar Anton' , imagen:'src/assets/ger/6.png', stock: 0},
          { id: 'GER 8', nombre: 'Ridle Baku' , imagen:'src/assets/ger/7.png', stock: 0},
          { id: 'GER 9', nombre: 'Maximilian Mittelstädt' , imagen:'src/assets/ger/8.png', stock: 2},
          { id: 'GER 10', nombre: 'Joshua Kimmich' , imagen:'src/assets/ger/9.png', stock: 0},
          { id: 'GER 11', nombre: 'Florian Wirtz' , imagen:'src/assets/ger/10.png', stock: 2},
          { id: 'GER 12', nombre: 'Felix Nmecha' , imagen:'src/assets/ger/11.png', stock: 1},
          { id: 'GER 14', nombre: 'Leon Goretzka' , imagen:'src/assets/ger/12.png', stock: 1},
          { id: 'GER 15', nombre: 'Jamal Musiala' , imagen:'src/assets/ger/13.png', stock: 1},
          { id: 'GER 16', nombre: 'Serge Gnabry' , imagen:'src/assets/ger/14.png', stock: 1},
          { id: 'GER 17', nombre: 'Kai Havertz' , imagen:'src/assets/ger/15.png', stock: 0},
          { id: 'GER 18', nombre: 'Leroy Sané' , imagen:'src/assets/ger/16.png', stock: 0},
          { id: 'GER 19', nombre: 'Karim Adeyemi' , imagen:'src/assets/ger/17.png', stock: 0},
          { id: 'GER 20', nombre: 'Nick Woltemade' , imagen:'src/assets/ger/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇼 Curazao',
        jugadores: [
          { id: 'CUW 2', nombre: 'Eloy Room' , imagen:'src/assets/cuw/1.png', stock: 2},
          { id: 'CUW 3', nombre: 'Armando Obispo' , imagen:'src/assets/cuw/2.png', stock: 0},
          { id: 'CUW 4', nombre: 'Sherel Floranus' , imagen:'src/assets/cuw/3.png', stock: 2},
          { id: 'CUW 5', nombre: 'Jurien Gaari' , imagen:'src/assets/cuw/4.png', stock: 0},
          { id: 'CUW 6', nombre: 'Joshua Brenet' , imagen:'src/assets/cuw/5.png', stock: 1},
          { id: 'CUW 7', nombre: 'Roshon van Eijma' , imagen:'src/assets/cuw/6.png', stock: 1},
          { id: 'CUW 8', nombre: 'Shurandy Sambo' , imagen:'src/assets/cuw/7.png', stock: 2},
          { id: 'CUW 9', nombre: 'Livano Comenencia' , imagen:'src/assets/cuw/8.png', stock: 0},
          { id: 'CUW 10', nombre: 'Godfried Roemeratoe' , imagen:'src/assets/cuw/9.png', stock: 1},
          { id: 'CUW 11', nombre: 'Juninho Bacuna' , imagen:'src/assets/cuw/10.png', stock: 0},
          { id: 'CUW 12', nombre: 'Leandro Bacuna' , imagen:'src/assets/cuw/11.png', stock: 2},
          { id: 'CUW 14', nombre: 'Tahith Chong' , imagen:'src/assets/cuw/12.png', stock: 1},
          { id: 'CUW 15', nombre: 'Kenji Gorré' , imagen:'src/assets/cuw/13.png', stock: 2},
          { id: 'CUW 16', nombre: 'Jearl Margaritha' , imagen:'src/assets/cuw/14.png', stock: 2},
          { id: 'CUW 17', nombre: 'Jürgen Locadia' , imagen:'src/assets/cuw/15.png', stock: 1},
          { id: 'CUW 18', nombre: 'Jeremy Antonisse' , imagen:'src/assets/cuw/16.png', stock: 2},
          { id: 'CUW 19', nombre: 'Gervane Kastaneer' , imagen:'src/assets/cuw/17.png', stock: 0},
          { id: 'CUW 20', nombre: 'Sontje Hansen' , imagen:'src/assets/cuw/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇨🇮 Costa de Marfil',
        jugadores: [
          { id: 'CIV 2', nombre: 'Yahia Fofana' , imagen:'src/assets/civ/1.png', stock: 1},
          { id: 'CIV 3', nombre: 'Ghislain Konan' , imagen:'src/assets/civ/2.png', stock: 0},
          { id: 'CIV 4', nombre: 'Wilfried Singo' , imagen:'src/assets/civ/3.png', stock: 0},
          { id: 'CIV 5', nombre: 'Odilon Kossounou' , imagen:'src/assets/civ/4.png', stock: 0},
          { id: 'CIV 6', nombre: 'Evan Ndicka' , imagen:'src/assets/civ/5.png', stock: 2},
          { id: 'CIV 7', nombre: 'Willy Boly' , imagen:'src/assets/civ/6.png', stock: 0},
          { id: 'CIV 8', nombre: 'Emmanuel Agbadou' , imagen:'src/assets/civ/7.png', stock: 2},
          { id: 'CIV 9', nombre: 'Ousmane Diomande' , imagen:'src/assets/civ/8.png', stock: 1},
          { id: 'CIV 10', nombre: 'Franck Kessié' , imagen:'src/assets/civ/9.png', stock: 1},
          { id: 'CIV 11', nombre: 'Seko Fofana' , imagen:'src/assets/civ/10.png', stock: 1},
          { id: 'CIV 12', nombre: 'Ibrahim Sangaré' , imagen:'src/assets/civ/11.png', stock: 2},
          { id: 'CIV 14', nombre: 'Jean-Philippe Gbamin' , imagen:'src/assets/civ/12.png', stock: 0},
          { id: 'CIV 15', nombre: 'Amad Diallo' , imagen:'src/assets/civ/13.png', stock: 1},
          { id: 'CIV 16', nombre: 'Sébastien Haller' , imagen:'src/assets/civ/14.png', stock: 0},
          { id: 'CIV 17', nombre: 'Simon Adingra' , imagen:'src/assets/civ/15.png', stock: 2},
          { id: 'CIV 18', nombre: 'Yan Diomande' , imagen:'src/assets/civ/16.png', stock: 2},
          { id: 'CIV 19', nombre: 'Evann Guessand' , imagen:'src/assets/civ/17.png', stock: 0},
          { id: 'CIV 20', nombre: 'Oumar Diakité' , imagen:'src/assets/civ/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇪🇨 Ecuador',
        jugadores: [
          { id: 'ECU 2', nombre: 'Hernán Galíndez' , imagen:'src/assets/ecu/1.png' , stock: 0},
          { id: 'ECU 3', nombre: 'Gonzalo Valle' , imagen:'src/assets/ecu/2.png', stock: 2},
          { id: 'ECU 4', nombre: 'Piero Hincapié' , imagen:'src/assets/ecu/3.png', stock: 0},
          { id: 'ECU 5', nombre: 'Pervis Estupiñán' , imagen:'src/assets/ecu/4.png', stock: 3},
          { id: 'ECU 6', nombre: 'Willian Pacho' , imagen:'src/assets/ecu/5.png', stock: 1},
          { id: 'ECU 7', nombre: 'Ángelo Preciado' , imagen:'src/assets/ecu/6.png', stock: 0},
          { id: 'ECU 8', nombre: 'Joel Ordóñez' , imagen:'src/assets/ecu/7.png', stock: 0},
          { id: 'ECU 9', nombre: 'Moisés Caicedo' , imagen:'src/assets/ecu/8.png', stock: 2},
          { id: 'ECU 10', nombre: 'Alan Franco' , imagen:'src/assets/ecu/9.png', stock: 0},
          { id: 'ECU 11', nombre: 'Kendry Páez' , imagen:'src/assets/ecu/10.png', stock: 0},
          { id: 'ECU 12', nombre: 'Pedro Vite' , imagen:'src/assets/ecu/11.png', stock: 0},
          { id: 'ECU 14', nombre: 'John Yeboah' , imagen:'src/assets/ecu/12.png', stock: 2},
          { id: 'ECU 15', nombre: 'Leonardo Campana' , imagen:'src/assets/ecu/13.png', stock: 1},
          { id: 'ECU 16', nombre: 'Gonzalo Plata' , imagen:'src/assets/ecu/14.png', stock: 0},
          { id: 'ECU 17', nombre: 'Nilson Angulo' , imagen:'src/assets/ecu/15.png', stock: 1},
          { id: 'ECU 18', nombre: 'Alan Minda' , imagen:'src/assets/ecu/16.png', stock: 1},
          { id: 'ECU 19', nombre: 'Kevin Rodríguez' , imagen:'src/assets/ecu/17.png', stock: 0},
          { id: 'ECU 20', nombre: 'Enner Valencia' , imagen:'src/assets/ecu/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🇫 GRUPO F',
    paises: [
      {
        nombre: '🇳🇱 Países Bajos',
        jugadores: [
          { id: 'NED 2', nombre: 'Bart Verbruggen' , imagen:'src/assets/ned/1.png', stock: 2},
          { id: 'NED 3', nombre: 'Virgil van Dijk' , imagen:'src/assets/ned/2.png', stock: 1},
          { id: 'NED 4', nombre: 'Micky van de Ven' , imagen:'src/assets/ned/3.png', stock: 1},
          { id: 'NED 5', nombre: 'Jurriën Timber' , imagen:'src/assets/ned/4.png', stock: 1},
          { id: 'NED 6', nombre: 'Denzel Dumfries' , imagen:'src/assets/ned/5.png', stock: 2},
          { id: 'NED 7', nombre: 'Nathan Aké' , imagen:'src/assets/ned/6.png', stock: 2},
          { id: 'NED 8', nombre: 'Jeremie Frimpong' , imagen:'src/assets/ned/7.png', stock: 1},
          { id: 'NED 9', nombre: 'Jan Paul van Hecke' , imagen:'src/assets/ned/8.png', stock: 1},
          { id: 'NED 10', nombre: 'Tijjani Reijnders' , imagen:'src/assets/ned/9.png', stock: 1},
          { id: 'NED 11', nombre: 'Ryan Gravenberch' , imagen:'src/assets/ned/10.png', stock: 2},
          { id: 'NED 12', nombre: 'Teun Koopmeiners' , imagen:'src/assets/ned/11.png', stock: 3},
          { id: 'NED 14', nombre: 'Frenkie de Jong' , imagen:'src/assets/ned/12.png', stock: 0},
          { id: 'NED 15', nombre: 'Xavi Simons' , imagen:'src/assets/ned/13.png', stock: 1},
          { id: 'NED 16', nombre: 'Justin Kluivert' , imagen:'src/assets/ned/14.png', stock: 2},
          { id: 'NED 17', nombre: 'Memphis Depay' , imagen:'src/assets/ned/15.png', stock: 1},
          { id: 'NED 18', nombre: 'Donyell Malen' , imagen:'src/assets/ned/16.png', stock: 0},
          { id: 'NED 19', nombre: 'Wout Weghorst' , imagen:'src/assets/ned/17.png', stock: 3},
          { id: 'NED 20', nombre: 'Cody Gakpo' , imagen:'src/assets/ned/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇯🇵 Japón',
        jugadores: [
          { id: 'JPN 2', nombre: 'Zion Suzuki' , imagen:'src/assets/jpn/1.png', stock: 0},
          { id: 'JPN 3', nombre: 'Henry Heroki Mochizuki' , imagen:'src/assets/jpn/2.png', stock: 3},
          { id: 'JPN 4', nombre: 'Ayumu Seko' , imagen:'src/assets/jpn/3.png', stock: 0},
          { id: 'JPN 5', nombre: 'Junnosuke Suzuki' , imagen:'src/assets/jpn/4.png', stock: 1},
          { id: 'JPN 6', nombre: 'Shogo Taniguchi' , imagen:'src/assets/jpn/5.png', stock: 1},
          { id: 'JPN 7', nombre: 'Tsuyoshi Watanabe' , imagen:'src/assets/jpn/6.png', stock: 0},
          { id: 'JPN 8', nombre: 'Kaishu Sano' , imagen:'src/assets/jpn/7.png', stock: 2},
          { id: 'JPN 9', nombre: 'Yuki Soma' , imagen:'src/assets/jpn/8.png', stock: 2},
          { id: 'JPN 10', nombre: 'Ao Tanaka' , imagen:'src/assets/jpn/9.png', stock: 0},
          { id: 'JPN 11', nombre: 'Daichi Kamada' , imagen:'src/assets/jpn/10.png', stock: 0},
          { id: 'JPN 12', nombre: 'Takefusa Kubo' , imagen:'src/assets/jpn/11.png', stock: 3},
          { id: 'JPN 14', nombre: 'Ritsu Doan' , imagen:'src/assets/jpn/12.png', stock: 3},
          { id: 'JPN 15', nombre: 'Keito Nakamura' , imagen:'src/assets/jpn/13.png', stock: 2},
          { id: 'JPN 16', nombre: 'Takumi Minamino' , imagen:'src/assets/jpn/14.png', stock: 1},
          { id: 'JPN 17', nombre: 'Shuto Machino' , imagen:'src/assets/jpn/15.png', stock: 2},
          { id: 'JPN 18', nombre: 'Junya Ito' , imagen:'src/assets/jpn/16.png', stock: 2},
          { id: 'JPN 19', nombre: 'Koki Ogawa' , imagen:'src/assets/jpn/17.png', stock: 0},
          { id: 'JPN 20', nombre: 'Ayase Ueda' , imagen:'src/assets/jpn/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇸🇪 Suecia',
        jugadores: [
          { id: 'SWE 2', nombre: 'Victor Johansson' , imagen:'src/assets/swe/1.png', stock: 0},
          { id: 'SWE 3', nombre: 'Isak Hien' , imagen:'src/assets/swe/2.png', stock: 0},
          { id: 'SWE 4', nombre: 'Gabriel Gudmundsson' , imagen:'src/assets/swe/3.png', stock: 2},
          { id: 'SWE 5', nombre: 'Emil Holm' , imagen:'src/assets/swe/4.png', stock: 1},
          { id: 'SWE 6', nombre: 'Victor Nilsson Lindelöf' , imagen:'src/assets/swe/5.png', stock: 1},
          { id: 'SWE 7', nombre: 'Gustaf Lagerbielke' , imagen:'src/assets/swe/6.png', stock: 1},
          { id: 'SWE 8', nombre: 'Lucas Bergvall' , imagen:'src/assets/swe/7.png', stock: 2},
          { id: 'SWE 9', nombre: 'Hugo Larsson' , imagen:'src/assets/swe/8.png', stock: 1},
          { id: 'SWE 10', nombre: 'Jesper Karlström' , imagen:'src/assets/swe/9.png', stock: 0},
          { id: 'SWE 11', nombre: 'Yasin Ayari' , imagen:'src/assets/swe/10.png', stock: 0},
          { id: 'SWE 12', nombre: 'Mattias Svanberg' , imagen:'src/assets/swe/11.png', stock: 1},
          { id: 'SWE 14', nombre: 'Daniel Svensson' , imagen:'src/assets/swe/12.png', stock: 1},
          { id: 'SWE 15', nombre: 'Ken Sema' , imagen:'src/assets/swe/13.png', stock: 2},
          { id: 'SWE 16', nombre: 'Roony Bardghji' , imagen:'src/assets/swe/14.png', stock: 0},
          { id: 'SWE 17', nombre: 'Dejan Kulusevski' , imagen:'src/assets/swe/15.png', stock: 1},
          { id: 'SWE 18', nombre: 'Anthony Elanga' , imagen:'src/assets/swe/16.png', stock: 1},
          { id: 'SWE 19', nombre: 'Alexander Isak' , imagen:'src/assets/swe/17.png', stock: 1},
          { id: 'SWE 20', nombre: 'Viktor Gyökeres' , imagen:'src/assets/swe/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇹🇳 Túnez',
        jugadores: [
          { id: 'TUN 2', nombre: 'Bechir Ben Said' , imagen:'src/assets/tun/1.png', stock: 2},
          { id: 'TUN 3', nombre: 'Aymen Dahmen' , imagen:'src/assets/tun/2.png', stock: 2},
          { id: 'TUN 4', nombre: 'Yan Valery' , imagen:'src/assets/tun/3.png', stock: 0},
          { id: 'TUN 5', nombre: 'Montassar Talbi' , imagen:'src/assets/tun/4.png', stock: 1},
          { id: 'TUN 6', nombre: 'Yassine Meriah' , imagen:'src/assets/tun/5.png', stock: 1},
          { id: 'TUN 7', nombre: 'Ali Abdi' , imagen:'src/assets/tun/6.png', stock: 0},
          { id: 'TUN 8', nombre: 'Dylan Bronn' , imagen:'src/assets/tun/7.png', stock: 3},
          { id: 'TUN 9', nombre: 'Ellyes Skhiri' , imagen:'src/assets/tun/8.png', stock: 2},
          { id: 'TUN 10', nombre: 'Aïssa Laidouni', imagen:'src/assets/tun/9.png' , stock: 2},
          { id: 'TUN 11', nombre: 'Ferjani Sassi' , imagen:'src/assets/tun/10.png', stock: 0},
          { id: 'TUN 12', nombre: 'Mohamed Ali Ben Romdhane' , imagen:'src/assets/tun/11.png', stock: 4},
          { id: 'TUN 14', nombre: 'Hannibal Mejbri' , imagen:'src/assets/tun/12.png', stock: 2},
          { id: 'TUN 15', nombre: 'Elias Achouri' , imagen:'src/assets/tun/13.png', stock: 2},
          { id: 'TUN 16', nombre: 'Elias Saad' , imagen:'src/assets/tun/14.png', stock: 2},
          { id: 'TUN 17', nombre: 'Hazem Mastouri' , imagen:'src/assets/tun/15.png', stock: 4},
          { id: 'TUN 18', nombre: 'Ismaël Gharbi' , imagen:'src/assets/tun/16.png', stock: 2},
          { id: 'TUN 19', nombre: 'Sayfallah Ltaief' , imagen:'src/assets/tun/17.png', stock: 1},
          { id: 'TUN 20', nombre: 'Naïm Sliti' , imagen:'src/assets/tun/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🇬 GRUPO G',
    paises: [
      {
        nombre: '🇧🇪 Bélgica',
        jugadores: [
          { id: 'BEL 2', nombre: 'Thibaut Courtois' , imagen:'src/assets/bel/1.png', stock: 0},
          { id: 'BEL 3', nombre: 'Arthur Theate' , imagen:'src/assets/bel/2.png', stock: 0},
          { id: 'BEL 4', nombre: 'Timothy Castagne' , imagen:'src/assets/bel/3.png', stock: 0},
          { id: 'BEL 5', nombre: 'Zeno Debast', imagen:'src/assets/bel/4.png' , stock: 2},
          { id: 'BEL 6', nombre: 'Brandon Mechele', imagen:'src/assets/bel/5.png' , stock: 0},
          { id: 'BEL 7', nombre: 'Maxim De Cuyper' , imagen:'src/assets/bel/6.png', stock: 0},
          { id: 'BEL 8', nombre: 'Thomas Meunier' , imagen:'src/assets/bel/7.png', stock: 1},
          { id: 'BEL 9', nombre: 'Youri Tielemans' , imagen:'src/assets/bel/8.png', stock: 2},
          { id: 'BEL 10', nombre: 'Amadou Onana' , imagen:'src/assets/bel/9.png', stock: 0},
          { id: 'BEL 11', nombre: 'Nicolas Raskin' , imagen:'src/assets/bel/10.png', stock: 0},
          { id: 'BEL 12', nombre: 'Alexis Saelemaekers' , imagen:'src/assets/bel/11.png', stock: 1},
          { id: 'BEL 14', nombre: 'Hans Vanaken' , imagen:'src/assets/bel/12.png', stock: 1},
          { id: 'BEL 15', nombre: 'Kevin De Bruyne' , imagen:'src/assets/bel/13.png', stock: 0},
          { id: 'BEL 16', nombre: 'Jérémy Doku' , imagen:'src/assets/bel/14.png', stock: 0},
          { id: 'BEL 17', nombre: 'Charles De Ketelaere' , imagen:'src/assets/bel/15.png', stock: 0},
          { id: 'BEL 18', nombre: 'Leandro Trossard' , imagen:'src/assets/bel/16.png', stock: 1},
          { id: 'BEL 19', nombre: 'Loïs Openda' , imagen:'src/assets/bel/17.png', stock: 2},
          { id: 'BEL 20', nombre: 'Romelu Lukaku' , imagen:'src/assets/bel/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇪🇬 Egipto',
        jugadores: [
          { id: 'EGY 2', nombre: 'Mohamed El Shenawy' , imagen:'src/assets/egy/1.png', stock: 3},
          { id: 'EGY 3', nombre: 'Mohamed Hany' , imagen:'src/assets/egy/2.png', stock: 1},
          { id: 'EGY 4', nombre: 'Mohamed Hamdy' , imagen:'src/assets/egy/3.png', stock: 0},
          { id: 'EGY 5', nombre: 'Yasser Ibrahim' , imagen:'src/assets/egy/4.png', stock: 0},
          { id: 'EGY 6', nombre: 'Khaled Sobhi' , imagen:'src/assets/egy/5.png', stock: 0},
          { id: 'EGY 7', nombre: 'Ramy Rabia' , imagen:'src/assets/egy/6.png', stock: 2},
          { id: 'EGY 8', nombre: 'Hossam Abdelmaguid' , imagen:'src/assets/egy/7.png', stock: 1},
          { id: 'EGY 9', nombre: 'Ahmed Fatouh' , imagen:'src/assets/egy/8.png', stock: 0},
          { id: 'EGY 10', nombre: 'Marwan Attia' , imagen:'src/assets/egy/9.png', stock: 3},
          { id: 'EGY 11', nombre: 'Zizo' , imagen:'src/assets/egy/10.png', stock: 2},
          { id: 'EGY 12', nombre: 'Hamdy Fathy' , imagen:'src/assets/egy/11.png', stock: 0},
          { id: 'EGY 14', nombre: 'Mohamed Lasheen' , imagen:'src/assets/egy/12.png', stock: 0},
          { id: 'EGY 15', nombre: 'Emam Ashour' , imagen:'src/assets/egy/13.png', stock: 2},
          { id: 'EGY 16', nombre: 'Osama Faisal' , imagen:'src/assets/egy/14.png', stock: 0},
          { id: 'EGY 17', nombre: 'Mohamed Salah' , imagen:'src/assets/egy/15.png', stock: 0},
          { id: 'EGY 18', nombre: 'Mostafa Mohamed' , imagen:'src/assets/egy/16.png', stock: 0},
          { id: 'EGY 19', nombre: 'Trezeguet' , imagen:'src/assets/egy/17.png', stock: 0},
          { id: 'EGY 20', nombre: 'Omar Marmoush' , imagen:'src/assets/egy/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇮🇷 Irán',
        jugadores: [
          { id: 'IRN 2', nombre: 'Alireza Beiranvand' , imagen:'src/assets/irn/1.png' , stock: 0},
          { id: 'IRN 3', nombre: 'Morteza Pouraliganji' , imagen:'src/assets/irn/2.png', stock: 0},
          { id: 'IRN 4', nombre: 'Ehsan Hajsafi' , imagen:'src/assets/irn/3.png', stock: 1},
          { id: 'IRN 5', nombre: 'Milad Mohammadi' , imagen:'src/assets/irn/4.png', stock: 0},
          { id: 'IRN 6', nombre: 'Shojae Khalilzadeh' , imagen:'src/assets/irn/5.png', stock: 0},
          { id: 'IRN 7', nombre: 'Ramin Rezaeian' , imagen:'src/assets/irn/6.png', stock: 0},
          { id: 'IRN 8', nombre: 'Hossein Kanaani' , imagen:'src/assets/irn/7.png', stock: 2},
          { id: 'IRN 9', nombre: 'Sadegh Moharrami' , imagen:'src/assets/irn/8.png', stock: 0},
          { id: 'IRN 10', nombre: 'Saleh Hardani' , imagen:'src/assets/irn/9.png', stock: 0},
          { id: 'IRN 11', nombre: 'Saeed Ezatolahi' , imagen:'src/assets/irn/10.png', stock: 0},
          { id: 'IRN 12', nombre: 'Saman Ghoddos' , imagen:'src/assets/irn/11.png', stock: 1},
          { id: 'IRN 14', nombre: 'Omid Noorafkan' , imagen:'src/assets/irn/12.png', stock: 2},
          { id: 'IRN 15', nombre: 'Roozbeh Cheshmi' , imagen:'src/assets/irn/13.png', stock: 3},
          { id: 'IRN 16', nombre: 'Mohammad Mohebi' , imagen:'src/assets/irn/14.png', stock: 0},
          { id: 'IRN 17', nombre: 'Sardar Azmoun' , imagen:'src/assets/irn/15.png', stock: 0},
          { id: 'IRN 18', nombre: 'Mehdi Taremi' , imagen:'src/assets/irn/16.png', stock: 0},
          { id: 'IRN 19', nombre: 'Alireza Jahanbakhsh' , imagen:'src/assets/irn/17.png', stock: 4},
          { id: 'IRN 20', nombre: 'Ali Gholizadeh' , imagen:'src/assets/irn/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇳🇿 Nueva Zelanda',
        jugadores: [
          { id: 'NZL 2', nombre: 'Max Crocombe Payne' , imagen:'src/assets/nzl/1.png' , stock: 1},
          { id: 'NZL 3', nombre: 'Alex Paulsen' , imagen:'src/assets/nzl/2.png', stock: 0},
          { id: 'NZL 4', nombre: 'Michael Boxall' , imagen:'src/assets/nzl/3.png', stock: 0},
          { id: 'NZL 5', nombre: 'Liberato Cacace' , imagen:'src/assets/nzl/4.png', stock: 0},
          { id: 'NZL 6', nombre: 'Tim Payne' , imagen:'src/assets/nzl/5.png', stock: 0},
          { id: 'NZL 7', nombre: 'Tyler Bindon' , imagen:'src/assets/nzl/6.png', stock: 0},
          { id: 'NZL 8', nombre: 'Francis de Vries' , imagen:'src/assets/nzl/7.png', stock: 0},
          { id: 'NZL 9', nombre: 'Finn Surman' , imagen:'src/assets/nzl/8.png', stock: 0},
          { id: 'NZL 10', nombre: 'Joe Bell' , imagen:'src/assets/nzl/9.png', stock: 2},
          { id: 'NZL 11', nombre: 'Sarpreet Singh' , imagen:'src/assets/nzl/10.png', stock: 0},
          { id: 'NZL 12', nombre: 'Ryan Thomas' , imagen:'src/assets/nzl/11.png', stock: 1},
          { id: 'NZL 14', nombre: 'Matthew Garbett' , imagen:'src/assets/nzl/12.png', stock: 0},
          { id: 'NZL 15', nombre: 'Marko Stamenic' , imagen:'src/assets/nzl/13.png', stock: 2},
          { id: 'NZL 16', nombre: 'Ben Old' , imagen:'src/assets/nzl/14.png', stock: 0},
          { id: 'NZL 17', nombre: 'Chris Wood' , imagen:'src/assets/nzl/15.png', stock: 1},
          { id: 'NZL 18', nombre: 'Elijah Just' , imagen:'src/assets/nzl/16.png', stock: 0},
          { id: 'NZL 19', nombre: 'Callum McCowatt' , imagen:'src/assets/nzl/17.png', stock: 0},
          { id: 'NZL 20', nombre: 'Kosta Barbarouses' , imagen:'src/assets/nzl/18.png', stock: 1},
        ],
      },
    ],
  },
  {
    nombre: '🅷 GRUPO H',
    paises: [
      {
        nombre: '🇪🇸 España',
        jugadores: [
          { id: 'ESP 2', nombre: 'Unai Simón' , imagen:'src/assets/esp/1.png', stock: 0},
          { id: 'ESP 3', nombre: 'Robin Le Normand' , imagen:'src/assets/esp/2.png', stock: 2},
          { id: 'ESP 4', nombre: 'Aymeric Laporte' , imagen:'src/assets/esp/3.png', stock: 3},
          { id: 'ESP 5', nombre: 'Dean Huijsen' , imagen:'src/assets/esp/4.png', stock: 0},
          { id: 'ESP 6', nombre: 'Pedro Porro' , imagen:'src/assets/esp/5.png', stock: 0},
          { id: 'ESP 7', nombre: 'Dani Carvajal' , imagen:'src/assets/esp/6.png', stock: 1},
          { id: 'ESP 8', nombre: 'Marc Cucurella' , imagen:'src/assets/esp/7.png', stock: 4},
          { id: 'ESP 9', nombre: 'Martín Zubimendi' , imagen:'src/assets/esp/8.png', stock: 0},
          { id: 'ESP 10', nombre: 'Rodri' , imagen:'src/assets/esp/9.png', stock: 0},
          { id: 'ESP 11', nombre: 'Pedri' , imagen:'src/assets/esp/10.png', stock: 0},
          { id: 'ESP 12', nombre: 'Fabián Ruiz' , imagen:'src/assets/esp/11.png', stock: 0},
          { id: 'ESP 14', nombre: 'Mikel Merino' , imagen:'src/assets/esp/12.png', stock: 0},
          { id: 'ESP 15', nombre: 'Lamine Yamal' , imagen:'src/assets/esp/13.png', stock: 0},
          { id: 'ESP 16', nombre: 'Dani Olmo' , imagen:'src/assets/esp/14.png', stock: 0},
          { id: 'ESP 17', nombre: 'Nico Williams' , imagen:'src/assets/esp/15.png', stock: 0},
          { id: 'ESP 18', nombre: 'Ferran Torres' , imagen:'src/assets/esp/16.png', stock: 0},
          { id: 'ESP 19', nombre: 'Álvaro Morata' , imagen:'src/assets/esp/17.png', stock: 0},
          { id: 'ESP 20', nombre: 'Mikel Oyarzabal' , imagen:'src/assets/esp/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇻 Cabo Verde',
        jugadores: [
          { id: 'CPV 2', nombre: 'Vozinha' , imagen:'src/assets/cpv/1.png', stock: 0},
          { id: 'CPV 3', nombre: 'Logan Costa' , imagen:'src/assets/cpv/2.png', stock: 1},
          { id: 'CPV 4', nombre: 'Pico' , imagen:'src/assets/cpv/3.png', stock: 1},
          { id: 'CPV 5', nombre: 'Diney' , imagen:'src/assets/cpv/4.png', stock: 1},
          { id: 'CPV 6', nombre: 'Steven Moreira' , imagen:'src/assets/cpv/5.png', stock: 2},
          { id: 'CPV 7', nombre: 'Wagner Pina' , imagen:'src/assets/cpv/6.png', stock: 1},
          { id: 'CPV 8', nombre: 'João Paulo' , imagen:'src/assets/cpv/7.png', stock: 1},
          { id: 'CPV 9', nombre: 'Yannick Semedo' , imagen:'src/assets/cpv/8.png', stock: 1},
          { id: 'CPV 10', nombre: 'Kevin Pina' , imagen:'src/assets/cpv/9.png', stock: 1},
          { id: 'CPV 11', nombre: 'Patrick Andrade' , imagen:'src/assets/cpv/10.png', stock: 2},
          { id: 'CPV 12', nombre: 'Jamiro Monteiro' , imagen:'src/assets/cpv/11.png', stock: 0},
          { id: 'CPV 14', nombre: 'Deroy Duarte' , imagen:'src/assets/cpv/12.png', stock: 0},
          { id: 'CPV 15', nombre: 'Garry Rodrigues' , imagen:'src/assets/cpv/13.png', stock: 1},
          { id: 'CPV 16', nombre: 'Jovane Cabral' , imagen:'src/assets/cpv/14.png', stock: 2},
          { id: 'CPV 17', nombre: 'Ryan Mendes' , imagen:'src/assets/cpv/15.png', stock: 1},
          { id: 'CPV 18', nombre: 'Dailon Livramento' , imagen:'src/assets/cpv/16.png', stock: 0},
          { id: 'CPV 19', nombre: 'Willy Semedo' , imagen:'src/assets/cpv/17.png', stock: 0},
          { id: 'CPV 20', nombre: 'Bebe' , imagen:'src/assets/cpv/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇸🇦 Arabia Saudita',
        jugadores: [
          { id: 'KSA 2', nombre: 'Nawaf Alaqidi' , imagen:'src/assets/ksa/1.png', stock: 0},
          { id: 'KSA 3', nombre: 'Abdulrahman Al-Sanbi' , imagen:'src/assets/ksa/2.png', stock: 0},
          { id: 'KSA 4', nombre: 'Saud Abdulhamid' , imagen:'src/assets/ksa/3.png', stock: 1},
          { id: 'KSA 5', nombre: 'Nawaf Bouwashl' , imagen:'src/assets/ksa/4.png', stock: 1},
          { id: 'KSA 6', nombre: 'Jihad Thakri' , imagen:'src/assets/ksa/5.png', stock: 0},
          { id: 'KSA 7', nombre: 'Moteb Al-Harbi' , imagen:'src/assets/ksa/6.png', stock: 1},
          { id: 'KSA 8', nombre: 'Hassan Altambakti' , imagen:'src/assets/ksa/7.png', stock: 1},
          { id: 'KSA 9', nombre: 'Musab Aljuwayr' , imagen:'src/assets/ksa/8.png', stock: 0},
          { id: 'KSA 10', nombre: 'Ziyad Aljohani' , imagen:'src/assets/ksa/9.png', stock: 0},
          { id: 'KSA 11', nombre: 'Abdullah Alkhaibari' , imagen:'src/assets/ksa/10.png', stock: 1},
          { id: 'KSA 12', nombre: 'Nasser Aldawsari' , imagen:'src/assets/ksa/11.png', stock: 1},
          { id: 'KSA 14', nombre: 'Saleh Abu Alshamat' , imagen:'src/assets/ksa/12.png', stock: 1},
          { id: 'KSA 15', nombre: 'Marwan Alsahafi' , imagen:'src/assets/ksa/13.png', stock: 0},
          { id: 'KSA 16', nombre: 'Salem Al-Dawsari' , imagen:'src/assets/ksa/14.png', stock: 0},
          { id: 'KSA 17', nombre: 'Abdulrahman Al-Aboud' , imagen:'src/assets/ksa/15.png', stock: 0},
          { id: 'KSA 18', nombre: 'Feras Albrikan' , imagen:'src/assets/ksa/16.png', stock: 0},
          { id: 'KSA 19', nombre: 'Saleh Al-Shehri' , imagen:'src/assets/ksa/17.png', stock: 0},
          { id: 'KSA 20', nombre: 'Abdullah Al-Hamdan' , imagen:'src/assets/ksa/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇺🇾 Uruguay',
        jugadores: [
          { id: 'URU 2', nombre: 'Sergio Rochet' , imagen:'src/assets/uru/1.png', stock: 0},
          { id: 'URU 3', nombre: 'Santiago Mele' , imagen:'src/assets/uru/2.png', stock: 1},
          { id: 'URU 4', nombre: 'Ronald Araújo' , imagen:'src/assets/uru/3.png', stock: 0},
          { id: 'URU 5', nombre: 'José María Giménez' , imagen:'src/assets/uru/4.png', stock: 0},
          { id: 'URU 6', nombre: 'Sebastián Cáceres' , imagen:'src/assets/uru/5.png', stock: 2},
          { id: 'URU 7', nombre: 'Mathías Olivera' , imagen:'src/assets/uru/6.png', stock: 1},
          { id: 'URU 8', nombre: 'Guillermo Varela' , imagen:'src/assets/uru/7.png', stock: 0},
          { id: 'URU 9', nombre: 'Nahitan Nández' , imagen:'src/assets/uru/8.png', stock: 0},
          { id: 'URU 10', nombre: 'Federico Valverde' , imagen:'src/assets/uru/9.png', stock: 0},
          { id: 'URU 11', nombre: 'Giorgian de Arrascaeta' , imagen:'src/assets/uru/10.png', stock: 0},
          { id: 'URU 12', nombre: 'Rodrigo Bentancur' , imagen:'src/assets/uru/11.png', stock: 1},
          { id: 'URU 14', nombre: 'Manuel Ugarte' , imagen:'src/assets/uru/12.png', stock: 0},
          { id: 'URU 15', nombre: 'Nicolás de la Cruz' , imagen:'src/assets/uru/13.png', stock: 0},
          { id: 'URU 16', nombre: 'Maxi Araújo' , imagen:'src/assets/uru/14.png', stock: 2},
          { id: 'URU 17', nombre: 'Darwin Núñez' , imagen:'src/assets/uru/15.png', stock: 1},
          { id: 'URU 18', nombre: 'Federico Viñas' , imagen:'src/assets/uru/16.png', stock: 1},
          { id: 'URU 19', nombre: 'Rodrigo Aguirre' , imagen:'src/assets/uru/17.png', stock: 0},
          { id: 'URU 20', nombre: 'Facundo Pellistri' , imagen:'src/assets/uru/18.png', stock: 2},
        ],
      },
    ],
  },
  {
    nombre: '🇮 GRUPO I',
    paises: [
      {
        nombre: '🇫🇷 Francia',
        jugadores: [
          { id: 'FRA 2', nombre: 'Mike Maignan' , imagen:'src/assets/fra/1.png', stock: 1},
          { id: 'FRA 3', nombre: 'Theo Hernandez' , imagen:'src/assets/fra/2.png', stock: 1},
          { id: 'FRA 4', nombre: 'William Saliba' , imagen:'src/assets/fra/3.png', stock: 0},
          { id: 'FRA 5', nombre: 'Jules Koundé' , imagen:'src/assets/fra/4.png', stock: 0},
          { id: 'FRA 6', nombre: 'Ibrahima Konaté', imagen:'src/assets/fra/5.png' , stock: 0},
          { id: 'FRA 7', nombre: 'Dayot Upamecano' , imagen:'src/assets/fra/6.png', stock: 2},
          { id: 'FRA 8', nombre: 'Lucas Digne' , imagen:'src/assets/fra/7.png', stock: 0},
          { id: 'FRA 9', nombre: 'Aurélien Tchouaméni' , imagen:'src/assets/fra/8.png', stock: 0},
          { id: 'FRA 10', nombre: 'Eduardo Camavinga' , imagen:'src/assets/fra/9.png', stock: 0},
          { id: 'FRA 11', nombre: 'Manu Koné' , imagen:'src/assets/fra/10.png', stock: 1},
          { id: 'FRA 12', nombre: 'Adrien Rabiot' , imagen:'src/assets/fra/11.png', stock: 0},
          { id: 'FRA 14', nombre: 'Michael Olise' , imagen:'src/assets/fra/12.png', stock: 0},
          { id: 'FRA 15', nombre: 'Ousmane Dembélé' , imagen:'src/assets/fra/13.png', stock: 0},
          { id: 'FRA 16', nombre: 'Bradley Barcola' , imagen:'src/assets/fra/14.png', stock: 0},
          { id: 'FRA 17', nombre: 'Désiré Doué' , imagen:'src/assets/fra/15.png', stock: 0},
          { id: 'FRA 18', nombre: 'Kingsley Coman' , imagen:'src/assets/fra/16.png', stock: 0},
          { id: 'FRA 19', nombre: 'Hugo Ekitiké' , imagen:'src/assets/fra/17.png', stock: 0},
          { id: 'FRA 20', nombre: 'Kylian Mbappé' , imagen:'src/assets/fra/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇸🇳 Senegal',
        jugadores: [
          { id: 'SEN 2', nombre: 'Edouard Mendy' , imagen:'src/assets/sen/1.png', stock: 2},
          { id: 'SEN 3', nombre: 'Yehvann Diouf' , imagen:'src/assets/sen/2.png', stock: 2},
          { id: 'SEN 4', nombre: 'Moussa Niakhaté' , imagen:'src/assets/sen/3.png', stock: 0},
          { id: 'SEN 5', nombre: 'Abdoulaye Seck' , imagen:'src/assets/sen/4.png', stock: 0},
          { id: 'SEN 6', nombre: 'Ismaïl Jakobs' , imagen:'src/assets/sen/5.png', stock: 3},
          { id: 'SEN 7', nombre: 'El Hadji Malick Diouf' , imagen:'src/assets/sen/6.png', stock: 2},
          { id: 'SEN 8', nombre: 'Kalidou Koulibaly' , imagen:'src/assets/sen/7.png', stock: 1},
          { id: 'SEN 9', nombre: 'Idrissa Gana Gueye', imagen:'src/assets/sen/8.png' , stock: 1},
          { id: 'SEN 10', nombre: 'Pape Matar Sarr' , imagen:'src/assets/sen/9.png', stock: 1},
          { id: 'SEN 11', nombre: 'Pape Gueye' , imagen:'src/assets/sen/10.png', stock: 3},
          { id: 'SEN 12', nombre: 'Habib Diarra' , imagen:'src/assets/sen/11.png', stock: 1},
          { id: 'SEN 14', nombre: 'Lamine Camara' , imagen:'src/assets/sen/12.png', stock: 1},
          { id: 'SEN 15', nombre: 'Sadio Mané' , imagen:'src/assets/sen/13.png', stock: 1},
          { id: 'SEN 16', nombre: 'Ismaïla Sarr' , imagen:'src/assets/sen/14.png', stock: 1},
          { id: 'SEN 17', nombre: 'Boulaye Dia' , imagen:'src/assets/sen/15.png', stock: 1},
          { id: 'SEN 18', nombre: 'Iliman Ndiaye' , imagen:'src/assets/sen/16.png', stock: 2},
          { id: 'SEN 19', nombre: 'Nicolas Jackson' , imagen:'src/assets/sen/17.png', stock: 2},
          { id: 'SEN 20', nombre: 'Krépin Diatta' , imagen:'src/assets/sen/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇮🇶 Irak',
        jugadores: [
          { id: 'IRQ 2', nombre: 'Jalal Hassan' , imagen:'src/assets/irq/1.png', stock: 1},
          { id: 'IRQ 3', nombre: 'Rebin Sulaka' , imagen:'src/assets/irq/2.png', stock: 1},
          { id: 'IRQ 4', nombre: 'Hussein Ali' , imagen:'src/assets/irq/3.png', stock: 1},
          { id: 'IRQ 5', nombre: 'Akam Hashem' , imagen:'src/assets/irq/4.png', stock: 0},
          { id: 'IRQ 6', nombre: 'Merchas Doski' , imagen:'src/assets/irq/5.png', stock: 2},
          { id: 'IRQ 7', nombre: 'Zaid Tahseen' , imagen:'src/assets/irq/6.png', stock: 0},
          { id: 'IRQ 8', nombre: 'Manaf Younis' , imagen:'src/assets/irq/7.png', stock: 2},
          { id: 'IRQ 9', nombre: 'Zidane Iqbal' , imagen:'src/assets/irq/8.png', stock: 0},
          { id: 'IRQ 10', nombre: 'Amir Al-Ammari' , imagen:'src/assets/irq/9.png', stock: 0},
          { id: 'IRQ 11', nombre: 'Ibrahim Bayesh' , imagen:'src/assets/irq/10.png', stock: 0},
          { id: 'IRQ 12', nombre: 'Ali Jasim' , imagen:'src/assets/irq/11.png', stock: 0},
          { id: 'IRQ 14', nombre: 'Youssef Amyn' , imagen:'src/assets/irq/12.png', stock: 0},
          { id: 'IRQ 15', nombre: 'Aimar Sher' , imagen:'src/assets/irq/13.png', stock: 0},
          { id: 'IRQ 16', nombre: 'Marko Farji' , imagen:'src/assets/irq/14.png', stock: 0},
          { id: 'IRQ 17', nombre: 'Osama Rashid' , imagen:'src/assets/irq/15.png', stock: 0},
          { id: 'IRQ 18', nombre: 'Ali Al-Hamadi' , imagen:'src/assets/irq/16.png', stock: 0},
          { id: 'IRQ 19', nombre: 'Aymen Hussein' , imagen:'src/assets/irq/17.png', stock: 1},
          { id: 'IRQ 20', nombre: 'Mohanad Ali' , imagen:'src/assets/irq/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇳🇴 Noruega',
        jugadores: [
          { id: 'NOR 2', nombre: 'Ørjan Nyland' , imagen:'src/assets/nor/1.png', stock: 0},
          { id: 'NOR 3', nombre: 'Julian Ryerson' , imagen:'src/assets/nor/2.png', stock: 1},
          { id: 'NOR 4', nombre: 'Leo Østigård' , imagen:'src/assets/nor/3.png', stock: 4},
          { id: 'NOR 5', nombre: 'Kristoffer Vassbakk Ajer' , imagen:'src/assets/nor/4.png', stock: 2},
          { id: 'NOR 6', nombre: 'Marcus Holmgren Pedersen' , imagen:'src/assets/nor/5.png', stock: 1},
          { id: 'NOR 7', nombre: 'David Møller Wolfe' , imagen:'src/assets/nor/6.png', stock: 1},
          { id: 'NOR 8', nombre: 'Torbjørn Heggem' , imagen:'src/assets/nor/7.png', stock: 4},
          { id: 'NOR 9', nombre: 'Morten Thorsby' , imagen:'src/assets/nor/8.png', stock: 3},
          { id: 'NOR 10', nombre: 'Martin Ødegaard' , imagen:'src/assets/nor/9.png', stock: 0},
          { id: 'NOR 11', nombre: 'Sander Berge' , imagen:'src/assets/nor/10.png', stock: 0},
          { id: 'NOR 12', nombre: 'Andreas Schjelderup' , imagen:'src/assets/nor/11.png', stock: 3},
          { id: 'NOR 14', nombre: 'Patrick Berg' , imagen:'src/assets/nor/12.png', stock: 3},
          { id: 'NOR 15', nombre: 'Erling Haaland' , imagen:'src/assets/nor/13.png', stock: 0},
          { id: 'NOR 16', nombre: 'Alexander Sørloth', imagen:'src/assets/nor/14.png' , stock: 0},
          { id: 'NOR 17', nombre: 'Aron Dønnum', imagen:'src/assets/nor/15.png' , stock: 4},
          { id: 'NOR 18', nombre: 'Jørgen Strand Larsen' , imagen:'src/assets/nor/16.png', stock: 2},
          { id: 'NOR 19', nombre: 'Antonio Nusa' , imagen:'src/assets/nor/17.png', stock: 0},
          { id: 'NOR 20', nombre: 'Oscar Bobb' , imagen:'src/assets/nor/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🇯 GRUPO J',
    paises: [
      {
        nombre: '🇦🇷 Argentina',
        jugadores: [
          { id: 'ARG 2', nombre: 'Emiliano Martínez' , imagen:'src/assets/arg/emilianomartinez.png', stock: 0 },
          { id: 'ARG 3', nombre: 'Nahuel Molina', imagen:'src/assets/arg/nahuel molinaalvarez.png' , stock: 1},
          { id: 'ARG 4', nombre: 'Cristian Romero', imagen:'src/assets/arg/cristian romero.png', stock: 0},
          { id: 'ARG 5', nombre: 'Nicolás Otamendi', imagen:'src/assets/arg/nicolas otomendi.png' , stock: 0},
          { id: 'ARG 6', nombre: 'Nicolás Tagliafico' , imagen:'src/assets/arg/nicolas tagliafico.png', stock: 0},
          { id: 'ARG 7', nombre: 'Leonardo Balerdi' , imagen:'src/assets/arg/leonardo balerdigongález.png', stock: 0},
          { id: 'ARG 8', nombre: 'Enzo Fernández' , imagen:'src/assets/arg/enzo fernandez.png' , stock: 0},
          { id: 'ARG 9', nombre: 'Alexis Mac Allister' ,imagen:'src/assets/arg/alexis mac allister.png', stock: 0 },
          { id: 'ARG 10', nombre: 'Rodrigo De Paul' , imagen:'src/assets/arg/rodrigo de paul.png', stock: 0},
          { id: 'ARG 11', nombre: 'Exequiel Palacios' ,imagen:'src/assets/arg/exequiel palacios.png' , stock: 0},
          { id: 'ARG 12', nombre: 'Leandro Paredes' ,imagen:'src/assets/arg/leandro paredes.png', stock: 0},
          { id: 'ARG 14', nombre: 'Nico Paz' ,imagen:'src/assets/arg/nico paz.png', stock: 0},
          { id: 'ARG 15', nombre: 'Franco Mastantuono' ,imagen:'src/assets/arg/franco mastantuono.png', stock: 0},
          { id: 'ARG 16', nombre: 'Nico González' ,imagen:'src/assets/arg/nico gongález.png', stock: 0},
          { id: 'ARG 17', nombre: 'Lionel Messi',imagen:'src/assets/arg/lionel messi.png' , stock: 0},
          { id: 'ARG 18', nombre: 'Lautaro Martínez',imagen:'src/assets/arg/lautaro martinez.png' , stock: 0},
          { id: 'ARG 19', nombre: 'Julián Álvarez',imagen:'src/assets/arg/julian alvarez.png' , stock: 0},
          { id: 'ARG 20', nombre: 'Giuliano Simeone',imagen:'src/assets/arg/giuliano simeone.png' , stock: 1},
        ],
      },
      {
        nombre: '🇩🇿 Argelia',
        jugadores: [
          { id: 'ALG 2', nombre: 'Alexis Guendouz' , imagen:'src/assets/alg/1.png', stock: 1},
          { id: 'ALG 3', nombre: 'Ramy Bensebaini' , imagen:'src/assets/alg/2.png', stock: 0},
          { id: 'ALG 4', nombre: 'Youcef Atal' , imagen:'src/assets/alg/3.png', stock: 2},
          { id: 'ALG 5', nombre: 'Rayan Aït-Nouri' , imagen:'src/assets/alg/4.png', stock: 0},
          { id: 'ALG 6', nombre: 'Mohamed Amine Tougai' , imagen:'src/assets/alg/5.png', stock: 1},
          { id: 'ALG 7', nombre: 'Aïssa Mandi' , imagen:'src/assets/alg/6.png', stock: 0},
          { id: 'ALG 8', nombre: 'Ismaël Bennacer' , imagen:'src/assets/alg/7.png', stock: 4},
          { id: 'ALG 9', nombre: 'Houssem Aouar' , imagen:'src/assets/alg/8.png', stock: 0},
          { id: 'ALG 10', nombre: 'Hicham Boudaoui' , imagen:'src/assets/alg/9.png', stock: 2},
          { id: 'ALG 11', nombre: 'Ramiz Zerrouki' , imagen:'src/assets/alg/10.png', stock: 0},
          { id: 'ALG 12', nombre: 'Nabil Bentaleb' , imagen:'src/assets/alg/11.png', stock: 3},
          { id: 'ALG 14', nombre: 'Farès Chaïbi' , imagen:'src/assets/alg/12.png', stock: 0},
          { id: 'ALG 15', nombre: 'Riyad Mahrez' , imagen:'src/assets/alg/13.png', stock: 0},
          { id: 'ALG 16', nombre: 'Saïd Benrahma' , imagen:'src/assets/alg/14.png', stock: 0},
          { id: 'ALG 17', nombre: 'Anis Hadj Moussa' , imagen:'src/assets/alg/15.png', stock: 2},
          { id: 'ALG 18', nombre: 'Amine Gouiri' , imagen:'src/assets/alg/16.png', stock: 0},
          { id: 'ALG 19', nombre: 'Baghdad Bounedjah' , imagen:'src/assets/alg/17.png', stock: 0},
          { id: 'ALG 20', nombre: 'Mohammed Amoura' , imagen:'src/assets/alg/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇦🇹 Austria',
        jugadores: [
          { id: 'AUT 2', nombre: 'Alexander Schlager' , imagen:'src/assets/aut/1.png', stock: 0},
          { id: 'AUT 3', nombre: 'Patrick Pentz' , imagen:'src/assets/aut/2.png', stock: 1},
          { id: 'AUT 4', nombre: 'David Alaba' , imagen:'src/assets/aut/3.png', stock: 0},
          { id: 'AUT 5', nombre: 'Kevin Danso' , imagen:'src/assets/aut/4.png', stock: 0},
          { id: 'AUT 6', nombre: 'Philipp Lienhart' , imagen:'src/assets/aut/5.png', stock: 0},
          { id: 'AUT 7', nombre: 'Stefan Posch' , imagen:'src/assets/aut/6.png', stock: 0},
          { id: 'AUT 8', nombre: 'Phillipp Mwene' , imagen:'src/assets/aut/7.png', stock: 2},
          { id: 'AUT 9', nombre: 'Alexander Prass' , imagen:'src/assets/aut/8.png', stock: 0},
          { id: 'AUT 10', nombre: 'Xaver Schlager' , imagen:'src/assets/aut/9.png', stock: 2},
          { id: 'AUT 11', nombre: 'Marcel Sabitzer' , imagen:'src/assets/aut/10.png', stock: 1},
          { id: 'AUT 12', nombre: 'Konrad Laimer' , imagen:'src/assets/aut/11.png', stock: 0},
          { id: 'AUT 14', nombre: 'Florian Grillitsch' , imagen:'src/assets/aut/12.png', stock: 0},
          { id: 'AUT 15', nombre: 'Nicolas Seiwald' , imagen:'src/assets/aut/13.png', stock: 2},
          { id: 'AUT 16', nombre: 'Romano Schmid' , imagen:'src/assets/aut/14.png', stock: 1},
          { id: 'AUT 17', nombre: 'Patrick Wimmer' , imagen:'src/assets/aut/15.png', stock: 1},
          { id: 'AUT 18', nombre: 'Christoph Baumgartner' , imagen:'src/assets/aut/16.png', stock: 1},
          { id: 'AUT 19', nombre: 'Michael Gregoritsch' , imagen:'src/assets/aut/17.png', stock: 0},
          { id: 'AUT 20', nombre: 'Marko Arnautović' , imagen:'src/assets/aut/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇯🇴 Jordania',
        jugadores: [
          { id: 'JOR 2', nombre: 'Yazeed Abulaila', imagen:'src/assets/jor/1.png' , stock: 1},
          { id: 'JOR 3', nombre: 'Ihsan Haddad' , imagen:'src/assets/jor/2.png', stock: 0},
          { id: 'JOR 4', nombre: 'Mohammad Abu Hashish' , imagen:'src/assets/jor/3.png', stock: 1},
          { id: 'JOR 5', nombre: 'Yazan Al-Arab' , imagen:'src/assets/jor/4.png', stock: 0},
          { id: 'JOR 6', nombre: 'Abdallah Nasib' , imagen:'src/assets/jor/5.png', stock: 1},
          { id: 'JOR 7', nombre: 'Saleem Obaid' , imagen:'src/assets/jor/6.png', stock: 1},
          { id: 'JOR 8', nombre: 'Mohammad Abualnadi' , imagen:'src/assets/jor/7.png', stock: 1},
          { id: 'JOR 9', nombre: 'Ibrahim Saadeh' , imagen:'src/assets/jor/8.png', stock: 0},
          { id: 'JOR 10', nombre: 'Nizar Al-Rashdan' , imagen:'src/assets/jor/9.png', stock: 1},
          { id: 'JOR 11', nombre: 'Noor Al-Rawabdeh' , imagen:'src/assets/jor/10.png', stock: 0},
          { id: 'JOR 12', nombre: 'Mohannad Abu Taha' , imagen:'src/assets/jor/11.png', stock: 0},
          { id: 'JOR 14', nombre: 'Amer Jamous' , imagen:'src/assets/jor/12.png', stock: 0},
          { id: 'JOR 15', nombre: 'Musa Al-Taamari' , imagen:'src/assets/jor/13.png', stock: 0},
          { id: 'JOR 16', nombre: 'Yazan Al-Naimat' , imagen:'src/assets/jor/14.png', stock: 0},
          { id: 'JOR 17', nombre: 'Mahmoud Al-Mardi' , imagen:'src/assets/jor/15.png', stock: 0},
          { id: 'JOR 18', nombre: 'Ali Olwan' , imagen:'src/assets/jor/16.png', stock: 0},
          { id: 'JOR 19', nombre: 'Mohammad Abu Zrayq' , imagen:'src/assets/jor/17.png', stock: 1},
          { id: 'JOR 20', nombre: 'Ibrahim Sabra' , imagen:'src/assets/jor/18.png', stock: 0},
        ],
      },
    ],
  },
  {
    nombre: '🇰 GRUPO K',
    paises: [
      {
        nombre: '🇵🇹 Portugal',
        jugadores: [
          { id: 'POR 2', nombre: 'Diogo Costa' , imagen:'src/assets/por/1.png', stock: 2},
          { id: 'POR 3', nombre: 'José Sá' , imagen:'src/assets/por/2.png', stock: 2},
          { id: 'POR 4', nombre: 'Rúben Dias' , imagen:'src/assets/por/3.png', stock: 0},
          { id: 'POR 5', nombre: 'João Cancelo' , imagen:'src/assets/por/4.png', stock: 0},
          { id: 'POR 6', nombre: 'Diogo Dalot' , imagen:'src/assets/por/5.png', stock: 1},
          { id: 'POR 7', nombre: 'Nuno Mendes' , imagen:'src/assets/por/6.png', stock: 0},
          { id: 'POR 8', nombre: 'Gonçalo Inácio' , imagen:'src/assets/por/7.png', stock: 1},
          { id: 'POR 9', nombre: 'Bernardo Silva' , imagen:'src/assets/por/8.png', stock: 2},
          { id: 'POR 10', nombre: 'Bruno Fernandes' , imagen:'src/assets/por/9.png', stock: 0},
          { id: 'POR 11', nombre: 'Rúben Neves' , imagen:'src/assets/por/10.png', stock: 1},
          { id: 'POR 12', nombre: 'Vitinha' , imagen:'src/assets/por/11.png', stock: 0},
          { id: 'POR 14', nombre: 'João Neves' , imagen:'src/assets/por/12.png', stock: 2},
          { id: 'POR 15', nombre: 'Cristiano Ronaldo' , imagen:'src/assets/por/13.png', stock: 0},
          { id: 'POR 16', nombre: 'Francisco Trincão' , imagen:'src/assets/por/14.png', stock: 0},
          { id: 'POR 17', nombre: 'João Félix' , imagen:'src/assets/por/15.png', stock: 1},
          { id: 'POR 18', nombre: 'Gonçalo Ramos' , imagen:'src/assets/por/16.png', stock: 0},
          { id: 'POR 19', nombre: 'Pedro Neto' , imagen:'src/assets/por/17.png', stock: 1},
          { id: 'POR 20', nombre: 'Rafael Leão' , imagen:'src/assets/por/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇩 RD Congo',
        jugadores: [
          { id: 'COD 2', nombre: 'Lionel Mpasi' , imagen:'src/assets/cod/1.png', stock: 0},
          { id: 'COD 3', nombre: 'Aaron Wan-Bissaka' , imagen:'src/assets/cod/2.png', stock: 0},
          { id: 'COD 4', nombre: 'Axel Tuanzebe' , imagen:'src/assets/cod/3.png', stock: 0},
          { id: 'COD 5', nombre: 'Arthur Masuaku' , imagen:'src/assets/cod/4.png', stock: 0},
          { id: 'COD 6', nombre: 'Chancel Mbemba' , imagen:'src/assets/cod/5.png', stock: 2},
          { id: 'COD 7', nombre: 'Joris Kayembe' , imagen:'src/assets/cod/6.png', stock: 2},
          { id: 'COD 8', nombre: 'Charles Pickel' , imagen:'src/assets/cod/7.png', stock: 2},
          { id: 'COD 9', nombre: "Ngal'ayel Mukau" , imagen:'src/assets/cod/8.png', stock: 0},
          { id: 'COD 10', nombre: 'Edo Kayembe' , imagen:'src/assets/cod/9.png', stock: 2},
          { id: 'COD 11', nombre: 'Samuel Moutoussamy' , imagen:'src/assets/cod/10.png', stock: 2},
          { id: 'COD 12', nombre: 'Noah Sadiki' , imagen:'src/assets/cod/11.png', stock: 2},
          { id: 'COD 14', nombre: 'Théo Bongonda' , imagen:'src/assets/cod/12.png', stock: 0},
          { id: 'COD 15', nombre: 'Meschak Elia' , imagen:'src/assets/cod/13.png', stock: 2},
          { id: 'COD 16', nombre: 'Yoane Wissa' , imagen:'src/assets/cod/14.png', stock: 1},
          { id: 'COD 17', nombre: 'Brian Cipenga' , imagen:'src/assets/cod/15.png', stock: 2},
          { id: 'COD 18', nombre: 'Fiston Mayele' , imagen:'src/assets/cod/16.png', stock: 2},
          { id: 'COD 19', nombre: 'Cédric Bakambu' , imagen:'src/assets/cod/17.png', stock: 1},
          { id: 'COD 20', nombre: 'Nathanaël Mbuku' , imagen:'src/assets/cod/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇺🇿 Uzbekistán',
        jugadores: [
          { id: 'UZB 2', nombre: 'Utkir Yusupov', imagen:'src/assets/uzb/1.png' , stock: 3},
          { id: 'UZB 3', nombre: 'Farrukh Savfiev' , imagen:'src/assets/uzb/2.png', stock: 1},
          { id: 'UZB 4', nombre: 'Sherzod Nasrullaev' , imagen:'src/assets/uzb/3.png', stock: 2},
          { id: 'UZB 5', nombre: 'Umar Eshmurodov' , imagen:'src/assets/uzb/4.png', stock: 3},
          { id: 'UZB 6', nombre: 'Husniddin Aliqulov' , imagen:'src/assets/uzb/5.png', stock: 1},
          { id: 'UZB 7', nombre: 'Rustamjon Ashurmatov' , imagen:'src/assets/uzb/6.png', stock: 0},
          { id: 'UZB 8', nombre: 'Khojiakbar Alijonov' , imagen:'src/assets/uzb/7.png', stock: 2},
          { id: 'UZB 9', nombre: 'Abdukodir Khusanov' , imagen:'src/assets/uzb/8.png', stock: 0},
          { id: 'UZB 10', nombre: 'Odiljon Hamrobekov' , imagen:'src/assets/uzb/9.png', stock: 2},
          { id: 'UZB 11', nombre: 'Otabek Shukurov' , imagen:'src/assets/uzb/10.png', stock: 1},
          { id: 'UZB 12', nombre: 'Jamshid Iskanderov' , imagen:'src/assets/uzb/11.png', stock: 2},
          { id: 'UZB 14', nombre: 'Azizbek Turgunboev' , imagen:'src/assets/uzb/12.png', stock: 0},
          { id: 'UZB 15', nombre: 'Khojimat Erkinov' , imagen:'src/assets/uzb/13.png', stock: 1},
          { id: 'UZB 16', nombre: 'Eldor Shomurodov' , imagen:'src/assets/uzb/14.png', stock: 2},
          { id: 'UZB 17', nombre: 'Oston Urunov' , imagen:'src/assets/uzb/15.png', stock: 1},
          { id: 'UZB 18', nombre: 'Jaloliddin Masharipov' , imagen:'src/assets/uzb/16.png', stock: 0},
          { id: 'UZB 19', nombre: 'Igor Sergeev' , imagen:'src/assets/uzb/17.png', stock: 1},
          { id: 'UZB 20', nombre: 'Abbosbek Fayzullaev' , imagen:'src/assets/uzb/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇴 Colombia',
        jugadores: [
          { id: 'COL 2', nombre: 'Camilo Vargas' , imagen:'src/assets/col/1.png', stock: 2},
          { id: 'COL 3', nombre: 'David Ospina' , imagen:'src/assets/col/2.png', stock: 1},
          { id: 'COL 4', nombre: 'Dávinson Sánchez' , imagen:'src/assets/col/3.png', stock: 1},
          { id: 'COL 5', nombre: 'Yerry Mina' , imagen:'src/assets/col/4.png', stock: 0},
          { id: 'COL 6', nombre: 'Daniel Muñoz' , imagen:'src/assets/col/5.png', stock: 2},
          { id: 'COL 7', nombre: 'Johan Mojica' , imagen:'src/assets/col/6.png', stock: 2},
          { id: 'COL 8', nombre: 'Jhon Lucumí' , imagen:'src/assets/col/7.png', stock: 1},
          { id: 'COL 9', nombre: 'Santiago Arias' , imagen:'src/assets/col/8.png', stock: 0},
          { id: 'COL 10', nombre: 'Jefferson Lerma' , imagen:'src/assets/col/9.png', stock: 0},
          { id: 'COL 11', nombre: 'Kevin Castaño' , imagen:'src/assets/col/10.png', stock: 1},
          { id: 'COL 12', nombre: 'Richard Ríos' , imagen:'src/assets/col/11.png', stock: 1},
          { id: 'COL 14', nombre: 'James Rodríguez' , imagen:'src/assets/col/12.png', stock: 0},
          { id: 'COL 15', nombre: 'Juan Fernando Quintero' , imagen:'src/assets/col/13.png', stock: 1},
          { id: 'COL 16', nombre: 'Jorge Carrascal' , imagen:'src/assets/col/14.png', stock: 0},
          { id: 'COL 17', nombre: 'Jhon Arias' , imagen:'src/assets/col/15.png', stock: 0},
          { id: 'COL 18', nombre: 'Jhon Córdoba' , imagen:'src/assets/col/16.png', stock: 0},
          { id: 'COL 19', nombre: 'Luis Suárez' , imagen:'src/assets/col/17.png', stock: 2},
          { id: 'COL 20', nombre: 'Luis Díaz' , imagen:'src/assets/col/18.png', stock: 2},
        ],
      },
    ],
  },
  {
    nombre: '🅻 GRUPO L',
    paises: [
      {
        nombre: '🏴 Inglaterra',
        jugadores: [
          { id: 'ENG 2', nombre: 'Jordan Pickford' , imagen:'src/assets/eng/1.png', stock: 1},
          { id: 'ENG 3', nombre: 'John Stones' , imagen:'src/assets/eng/2.png', stock: 0},
          { id: 'ENG 4', nombre: 'Marc Guéhi' , imagen:'src/assets/eng/3.png', stock: 0},
          { id: 'ENG 5', nombre: 'Ezri Konsa' , imagen:'src/assets/eng/4.png', stock: 0},
          { id: 'ENG 6', nombre: 'Trent Alexander-Arnold' , imagen:'src/assets/eng/5.png', stock: 0},
          { id: 'ENG 7', nombre: 'Reece James' , imagen:'src/assets/eng/6.png', stock: 0},
          { id: 'ENG 8', nombre: 'Dan Burn' , imagen:'src/assets/eng/7.png', stock: 0},
          { id: 'ENG 9', nombre: 'Jordan Henderson' , imagen:'src/assets/eng/8.png', stock: 1},
          { id: 'ENG 10', nombre: 'Declan Rice' , imagen:'src/assets/eng/9.png', stock: 0},
          { id: 'ENG 11', nombre: 'Jude Bellingham' , imagen:'src/assets/eng/10.png', stock: 0},
          { id: 'ENG 12', nombre: 'Cole Palmer' , imagen:'src/assets/eng/11.png', stock: 0},
          { id: 'ENG 14', nombre: 'Morgan Rogers' , imagen:'src/assets/eng/12.png', stock: 0},
          { id: 'ENG 15', nombre: 'Anthony Gordon' , imagen:'src/assets/eng/13.png', stock: 0},
          { id: 'ENG 16', nombre: 'Phil Foden' , imagen:'src/assets/eng/14.png', stock: 0},
          { id: 'ENG 17', nombre: 'Bukayo Saka' , imagen:'src/assets/eng/15.png', stock: 0},
          { id: 'ENG 18', nombre: 'Harry Kane' , imagen:'src/assets/eng/16.png', stock: 0},
          { id: 'ENG 19', nombre: 'Marcus Rashford' , imagen:'src/assets/eng/17.png', stock: 0},
          { id: 'ENG 20', nombre: 'Ollie Watkins' , imagen:'src/assets/eng/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇭🇷 Croacia',
        jugadores: [
          { id: 'CRO 2', nombre: 'Dominik Livaković' , imagen:'src/assets/cro/1.png', stock: 2},
          { id: 'CRO 3', nombre: 'Duje Ćaleta-Car' , imagen:'src/assets/cro/2.png', stock: 0},
          { id: 'CRO 4', nombre: 'Joško Gvardiol' , imagen:'src/assets/cro/3.png', stock: 2},
          { id: 'CRO 5', nombre: 'Josip Stanišić' , imagen:'src/assets/cro/4.png', stock: 2},
          { id: 'CRO 6', nombre: 'Luka Vušković' , imagen:'src/assets/cro/5.png', stock: 1},
          { id: 'CRO 7', nombre: 'Josip Šutalo' , imagen:'src/assets/cro/6.png', stock: 0},
          { id: 'CRO 8', nombre: 'Kristijan Jakić' , imagen:'src/assets/cro/7.png', stock: 0},
          { id: 'CRO 9', nombre: 'Luka Modrić' , imagen:'src/assets/cro/8.png', stock: 1},
          { id: 'CRO 10', nombre: 'Mateo Kovačić' , imagen:'src/assets/cro/9.png', stock: 0},
          { id: 'CRO 11', nombre: 'Martin Baturina' , imagen:'src/assets/cro/10.png', stock: 0},
          { id: 'CRO 12', nombre: 'Lovro Majer' , imagen:'src/assets/cro/11.png', stock: 0},
          { id: 'CRO 14', nombre: 'Mario Pašalić' , imagen:'src/assets/cro/12.png', stock: 2},
          { id: 'CRO 15', nombre: 'Petar Sučić' , imagen:'src/assets/cro/13.png', stock: 2},
          { id: 'CRO 16', nombre: 'Ivan Perišić' , imagen:'src/assets/cro/14.png', stock: 0},
          { id: 'CRO 17', nombre: 'Marco Pašalić' , imagen:'src/assets/cro/15.png', stock: 2},
          { id: 'CRO 18', nombre: 'Ante Budimir' , imagen:'src/assets/cro/16.png', stock: 0},
          { id: 'CRO 19', nombre: 'Andrej Kramarić' , imagen:'src/assets/cro/17.png', stock: 2},
          { id: 'CRO 20', nombre: 'Franjo Ivanović' , imagen:'src/assets/cro/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇬🇭 Ghana',
        jugadores: [
          { id: 'GHA 2', nombre: 'Lawrence Ati Zigi' , imagen:'src/assets/gha/1.png', stock: 0},
          { id: 'GHA 3', nombre: 'Tariq Lamptey' , imagen:'src/assets/gha/2.png', stock: 0},
          { id: 'GHA 4', nombre: 'Mohammed Salisu' , imagen:'src/assets/gha/3.png', stock: 1},
          { id: 'GHA 5', nombre: 'Alidu Seidu' , imagen:'src/assets/gha/4.png', stock: 2},
          { id: 'GHA 6', nombre: 'Alexander Djiku' , imagen:'src/assets/gha/5.png', stock: 0},
          { id: 'GHA 7', nombre: 'Gideon Mensah' , imagen:'src/assets/gha/6.png', stock: 0},
          { id: 'GHA 8', nombre: 'Caleb Yirenkyi' , imagen:'src/assets/gha/7.png', stock: 0},
          { id: 'GHA 9', nombre: 'Abdul Issahaku Fatawu' , imagen:'src/assets/gha/8.png', stock: 2},
          { id: 'GHA 10', nombre: 'Thomas Partey' , imagen:'src/assets/gha/9.png', stock: 0},
          { id: 'GHA 11', nombre: 'Salis Abdul Samed' , imagen:'src/assets/gha/10.png', stock: 0},
          { id: 'GHA 12', nombre: 'Kamaldeen Sulemana' , imagen:'src/assets/gha/11.png', stock: 2},
          { id: 'GHA 14', nombre: 'Mohammed Kudus' , imagen:'src/assets/gha/12.png', stock: 0},
          { id: 'GHA 15', nombre: 'Iñaki Williams' , imagen:'src/assets/gha/13.png', stock: 0},
          { id: 'GHA 16', nombre: 'Jordan Ayew' , imagen:'src/assets/gha/14.png', stock: 0},
          { id: 'GHA 17', nombre: 'Andrew Ayew' , imagen:'src/assets/gha/15.png', stock: 1},
          { id: 'GHA 18', nombre: 'Joseph Paintsil' , imagen:'src/assets/gha/16.png', stock: 1},
          { id: 'GHA 19', nombre: 'Osman Bukari' , imagen:'src/assets/gha/17.png', stock: 0},
          { id: 'GHA 20', nombre: 'Antoine Semenyo' , imagen:'src/assets/gha/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇵🇦 Panamá',
        jugadores: [
          { id: 'PAN 2', nombre: 'Orlando Mosquera' , imagen:'src/assets/pan/1.png', stock: 0},
          { id: 'PAN 3', nombre: 'Luis Mejía' , imagen:'src/assets/pan/2.png', stock: 0},
          { id: 'PAN 4', nombre: 'Fidel Escobar' , imagen:'src/assets/pan/3.png', stock: 0},
          { id: 'PAN 5', nombre: 'Andrés Andrade' , imagen:'src/assets/pan/4.png', stock: 0},
          { id: 'PAN 6', nombre: 'Michael Amir Murillo' , imagen:'src/assets/pan/5.png', stock: 0},
          { id: 'PAN 7', nombre: 'Éric Davis' , imagen:'src/assets/pan/6.png', stock: 1},
          { id: 'PAN 8', nombre: 'José Córdoba' , imagen:'src/assets/pan/7.png', stock: 0},
          { id: 'PAN 9', nombre: 'César Blackman' , imagen:'src/assets/pan/8.png', stock: 0},
          { id: 'PAN 10', nombre: 'Cristian Martínez' , imagen:'src/assets/pan/9.png', stock: 0},
          { id: 'PAN 11', nombre: 'Aníbal Godoy' , imagen:'src/assets/pan/10.png', stock: 0},
          { id: 'PAN 12', nombre: 'Adalberto Carrasquilla' , imagen:'src/assets/pan/11.png', stock: 0},
          { id: 'PAN 14', nombre: 'Édgar Bárcenas' , imagen:'src/assets/pan/12.png', stock: 0},
          { id: 'PAN 15', nombre: 'Carlos Harvey' , imagen:'src/assets/pan/13.png', stock: 0},
          { id: 'PAN 16', nombre: 'Ismael Díaz' , imagen:'src/assets/pan/14.png', stock: 0},
          { id: 'PAN 17', nombre: 'José Fajardo' , imagen:'src/assets/pan/15.png', stock: 1},
          { id: 'PAN 18', nombre: 'Cecilio Waterman' , imagen:'src/assets/pan/16.png', stock: 0},
          { id: 'PAN 19', nombre: 'José Luis Rodríguez' , imagen:'src/assets/pan/17.png', stock: 0},
          { id: 'PAN 20', nombre: 'Alberto Quintero' , imagen:'src/assets/pan/18.png', stock: 0},
        ],
      },
    ],
  },
];

export default function Jugadores() {
  const [cantidades, setCantidades] = useState(() => {
    const guardado = localStorage.getItem('mi_carrito');
    return guardado ? JSON.parse(guardado) : {};
  });

  // Estado para controlar la apertura del modal del carrito
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Guardamos el grupo desplegado (null si ninguno está abierto, o el nombre del grupo)
  const [grupoAbierto, setGrupoAbierto] = useState('GRUPO A');

  const TELEFONO_WHATSAPP = '5491141984267';

  // Sincronizar con localStorage ante cualquier cambio
  useEffect(() => {
    localStorage.setItem('mi_carrito', JSON.stringify(cantidades));
  }, [cantidades]);

  const toggleGrupo = (nombreGrupo) => {
    // Si toca el mismo grupo que está abierto, lo cierra; si no, abre el nuevo
    setGrupoAbierto(grupoAbierto === nombreGrupo ? null : nombreGrupo);
  };

  const agregarFigurita = (id, stockDisponible) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual < stockDisponible) {
      setCantidades({ ...cantidades, [id]: cantidadActual + 1 });
    }
  };

  const restarFigurita = (id) => {
    const cantidadActual = cantidades[id] || 0;
    if (cantidadActual > 1) {
      setCantidades({ ...cantidades, [id]: cantidadActual - 1 });
    } else {
      eliminarDelCarrito(id);
    }
  };

  // Función directa para eliminar la figurita elegida
  const eliminarDelCarrito = (id) => {
    const copia = { ...cantidades };
    delete copia[id];
    setCantidades(copia);
  };

  const totalFiguritas = Object.values(cantidades).reduce((acc, curr) => acc + curr, 0);

  const enviarAWhatsApp = () => {
    const listaIds = Object.keys(cantidades);
    if (listaIds.length === 0) {
      alert('Seleccioná al menos un jugador para enviar el pedido.');
      return;
    }
    const lista = listaIds.map((id) => `• Figurita ${id} x${cantidades[id]}`).join('\n');
    const mensaje = encodeURIComponent(
      `¡Hola! Me interesan las siguientes figuritas de jugadores:\n\n${lista}\n\n¿Están disponibles?`
    );
    window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              FIGURA <span>26</span>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">← Volver al Inicio</Link>
          </div>
          {/* Abrir Modal */}
          <button className="cart-button" onClick={() => setMostrarCarrito(true)}>
            🛒 {totalFiguritas}
          </button>
        </div>
      </nav>

      {/* MODAL DEL CARRITO */}
      {mostrarCarrito && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}
          onClick={() => setMostrarCarrito(false)}
        >
          <div 
            style={{
              background: '#1a1a2e',
              border: '2px solid #6366f1',
              borderRadius: '12px',
              padding: '24px',
              width: '90%',
              maxWidth: '400px',
              maxHeight: '80vh',
              overflowY: 'auto',
              color: '#fff',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setMostrarCarrito(false)}
              style={{
                position: 'absolute', top: '10px', right: '15px',
                background: 'transparent', border: 'none',
                color: '#aaa', fontSize: '1.2rem', cursor: 'pointer'
              }}
            >
              ✖
            </button>
            <h2 style={{ color: '#fff', marginTop: 0, borderBottom: '1px solid #333', paddingBottom: '10px' }}>
  Tu Pedido 🛒
</h2>

            {Object.keys(cantidades).length === 0 ? (
              <p style={{ color: '#aaa', textAlign: 'center', margin: '20px 0' }}>
                Tu carrito está vacío.
              </p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>
                {Object.keys(cantidades).map((id) => (
                  <li 
                    key={id} 
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', background: '#0f172a',
                      padding: '10px', borderRadius: '8px', marginBottom: '8px'
                    }}
                  >
                    <span style={{ fontWeight: 'bold' }}>
                      Figurita {id} <span style={{ color: '#818cf8' }}>(x{cantidades[id]})</span>
                    </span>
                    <button 
                      onClick={() => eliminarDelCarrito(id)}
                      style={{
                        background: '#ef4444', border: 'none', borderRadius: '6px',
                        color: 'white', padding: '6px 10px', cursor: 'pointer',
                        fontWeight: 'bold', fontSize: '0.9rem'
                      }}
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button 
              onClick={enviarAWhatsApp}
              disabled={Object.keys(cantidades).length === 0}
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                border: 'none', background: Object.keys(cantidades).length === 0 ? '#374151' : '#10b981',
                color: '#fff', fontWeight: 'bold', fontSize: '1.1rem',
                cursor: Object.keys(cantidades).length === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Enviar a WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* ENCABEZADO */}
      <header style={{ textAlign: 'center', padding: '40px 20px 20px' }}>
        <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', margin: '0 0 12px', fontWeight: '700' }}>
          FIGURITAS DE JUGADORES
        </h1>
        <p style={{ color: '#aaa' }}>
          Toca cualquier grupo para desplegar sus países y jugadores.
        </p>
      </header>

      {/* CONTENEDOR TIPO ACORDEÓN */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 40px' }}>
        {GRUPOS_DATA.map((grupo) => {
          const estaAbierto = grupoAbierto === grupo.nombre;

          return (
            <div
              key={grupo.nombre}
              style={{
                marginBottom: '16px',
                borderRadius: '12px',
                border: estaAbierto ? '2px solid #6366f1' : '1px solid #333',
                background: '#1a1a2e',
                overflow: 'hidden',
                transition: 'border 0.2s ease',
              }}
            >
              {/* BOTÓN / CABECERA DEL GRUPO */}
              <button
                onClick={() => toggleGrupo(grupo.nombre)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  background: estaAbierto ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span>{grupo.nombre}</span>
                <span style={{ fontSize: '1rem', color: '#818cf8' }}>
                  {estaAbierto ? '▲ Cerrar' : '▼ Ver Jugadores'}
                </span>
              </button>

              {/* CONTENIDO DESPLEGABLE ABAJO DEL GRUPO */}
              {estaAbierto && (
                <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {grupo.paises.map((pais) => (
                    <div key={pais.nombre} style={{ marginBottom: '30px' }}>
                      <h3
                        style={{
                          color: '#e0e7ff',
                          fontSize: '1.2rem',
                          marginBottom: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          borderBottom: '1px solid #333',
                          paddingBottom: '6px',
                        }}
                      >
                        {pais.nombre}
                      </h3>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                          gap: '12px',
                        }}
                      >
                        {pais.jugadores.map((jugador) => {
                          const cantidadElegida = cantidades[jugador.id] || 0;
                          const sinStock = jugador.stock === 0;

                          return (
                            <div
                              key={jugador.id}
                              style={{
                                background: cantidadElegida > 0 ? 'rgba(99, 102, 241, 0.25)' : '#0f172a',
                                border: cantidadElegida > 0 ? '2px solid #6366f1' : '1px solid #333',
                                borderRadius: '10px',
                                padding: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                opacity: sinStock ? 0.5 : 1,
                              }}
                            >
                              <div>
                                <div
                                  style={{
                                    width: '100%',
                                    aspectRatio: '4.9 / 6.5',
                                    overflow: 'hidden',
                                    borderRadius: '6px',
                                    marginBottom: '8px',
                                    background: '#1a1a2e',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <img
                                    src={jugador.imagen}
                                    alt={jugador.nombre}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                  />
                                </div>

                                <span style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 'bold' }}>
                                  {jugador.id}
                                </span>
                                <h4 style={{ color: '#fff', margin: '4px 0', fontSize: '0.95rem' }}>
                                  {jugador.nombre}
                                </h4>
                                <p style={{ color: sinStock ? '#ef4444' : '#10b981', fontSize: '0.75rem', fontWeight: 'bold', margin: 0 }}>
                                  {sinStock ? 'Sin stock' : `Stock: ${jugador.stock} u.`}
                                </p>
                              </div>

                              <div style={{ marginTop: '10px' }}>
                                {cantidadElegida === 0 ? (
                                  <button
                                    disabled={sinStock}
                                    onClick={() => agregarFigurita(jugador.id, jugador.stock)}
                                    style={{
                                      width: '100%',
                                      padding: '6px',
                                      borderRadius: '6px',
                                      border: 'none',
                                      background: sinStock ? '#374151' : '#4f46e5',
                                      color: '#fff',
                                      cursor: sinStock ? 'not-allowed' : 'pointer',
                                      fontWeight: 'bold',
                                      fontSize: '0.8rem',
                                    }}
                                  >
                                    {sinStock ? 'Agotado' : 'Agregar +'}
                                  </button>
                                ) : (
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      background: '#1a1a2e',
                                      borderRadius: '6px',
                                      padding: '4px 6px',
                                    }}
                                  >
                                    <button
                                      onClick={() => restarFigurita(jugador.id)}
                                      style={{ background: '#ef4444', border: 'none', color: '#fff', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                                    >
                                      -
                                    </button>
                                    <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                      {cantidadElegida}
                                    </span>
                                    <button
                                      disabled={cantidadElegida >= jugador.stock}
                                      onClick={() => agregarFigurita(jugador.id, jugador.stock)}
                                      style={{ background: cantidadElegida >= jugador.stock ? '#4b5563' : '#10b981', border: 'none', color: '#fff', padding: '2px 8px', borderRadius: '4px', cursor: cantidadElegida >= jugador.stock ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
                                    >
                                      +
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}