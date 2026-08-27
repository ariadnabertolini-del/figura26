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
          { id: 'MEX 2', nombre: 'Luis Malagón', imagen:'/mex/luis.png' , stock: 1},
          { id: 'MEX 3', nombre: 'Johan Vásquez', imagen: '/mex/johan.png', stock: 0},
          { id: 'MEX 4', nombre: 'Jorge Sánchez',imagen: '/mex/jorge.png', stock: 0 },
          { id: 'MEX 5', nombre: 'César Montes' ,imagen: '/mex/cesar.png', stock: 0},
          { id: 'MEX 6', nombre: 'Jesús Gallardo' ,imagen: '/mex/jesus.png', stock: 1},
          { id: 'MEX 7', nombre: 'Israel Reyes',imagen: '/mex/israel.png' , stock: 2},
          { id: 'MEX 8', nombre: 'Diego Lainez' ,imagen: '/mex/diego.png', stock: 1},
          { id: 'MEX 9', nombre: 'Carlos Rodríguez' ,imagen: '/mex/carlos.png', stock: 1},
          { id: 'MEX 10', nombre: 'Edson Álvarez' ,imagen: '/mex/edson.png', stock: 3},
          { id: 'MEX 11', nombre: 'Orbelín Pineda' ,imagen: '/mex/orbelin.png', stock: 11},
          { id: 'MEX 12', nombre: 'Marcel Ruiz' ,imagen: '/mex/marcel.png', stock: 0},
          { id: 'MEX 14', nombre: 'Érick Sánchez' ,imagen: '/mex/erick.png', stock: 0},
          { id: 'MEX 15', nombre: 'Hirving Lozano' ,imagen: '/mex/hirving.png', stock: 1},
          { id: 'MEX 16', nombre: 'Santiago Giménez' ,imagen: '/mex/santiago.png', stock: 0},
          { id: 'MEX 17', nombre: 'Raúl Jiménez' ,imagen: '/mex/raul.png', stock: 0},
          { id: 'MEX 18', nombre: 'Alexis Vega' ,imagen: '/mex/alex.png', stock: 2},
          { id: 'MEX 19', nombre: 'Roberto Alvarado', imagen: '/mex/roberto.png', stock: 2},
          { id: 'MEX 20', nombre: 'César Huerta' ,imagen: '/mex/cesa.png', stock: 0},
        ],
      },
      {
        nombre: '🇿🇦 Sudáfrica',
        jugadores: [
          { id: 'RSA 2', nombre: 'Ronwen Williams', imagen:'/rsa/r.png', stock: 2},
          { id: 'RSA 3', nombre: 'Sipho Chaine' , imagen:'/rsa/si.png', stock: 1},
          { id: 'RSA 4', nombre: 'Aubrey Modiba' , imagen:'/rsa/a.png', stock: 3},
          { id: 'RSA 5', nombre: 'Samukele Kabini', imagen:'/rsa/s.png' , stock: 3},
          { id: 'RSA 6', nombre: 'Mbekezeli Mbokazi' , imagen:'/rsa/mb.png', stock: 1},
          { id: 'RSA 7', nombre: 'Khulumani Ndamane' , imagen:'/rsa/khu.png', stock: 0},
          { id: 'RSA 8', nombre: 'Siyabonga Ngezana' , imagen:'/rsa/siya.png', stock: 0},
          { id: 'RSA 9', nombre: 'Khuliso Mudau' , imagen:'/rsa/k.png', stock: 2},
          { id: 'RSA 10', nombre: 'Nkosinathi Sibisi' , imagen:'/rsa/siph.png', stock: 1},
          { id: 'RSA 11', nombre: 'Teboho Mokoena' , imagen:'/rsa/teb.png', stock: 1},
          { id: 'RSA 12', nombre: 'Thalente Mbatha' , imagen:'/rsa/tha.png', stock: 0},
          { id: 'RSA 14', nombre: 'Bathasi Aubaas' , imagen:'/rsa/bat.png', stock: 0},
          { id: 'RSA 15', nombre: 'Yaya Sithole' , imagen:'/rsa/yaya.png', stock: 1},
          { id: 'RSA 16', nombre: 'Sipho Mbule' , imagen:'/rsa/sip.png', stock: 2},
          { id: 'RSA 17', nombre: 'Lyle Foster' , imagen:'/rsa/ly.png', stock: 0},
          { id: 'RSA 18', nombre: 'Iqraam Rayners' , imagen:'/rsa/io.png', stock: 0},
          { id: 'RSA 19', nombre: 'Mohau Nkota' , imagen:'/rsa/m.png', stock: 1},
          { id: 'RSA 20', nombre: 'Oswin Appollis' , imagen:'/rsa/o.png', stock: 2},
        ],
      },
      {
        nombre: '🇰🇷 Corea del Sur',
        jugadores: [
          { id: 'KOR 2', nombre: 'Hyeon-woo Jo', imagen:'/kor/1.png' , stock: 3},
          { id: 'KOR 3', nombre: 'Seung-Gyu Kim' , imagen:'/kor/2.png', stock: 2},
          { id: 'KOR 4', nombre: 'Min-jae Kim' , imagen:'/kor/3.png', stock: 0},
          { id: 'KOR 5', nombre: 'Yu-min Cho' , imagen:'/kor/4.png', stock: 0},
          { id: 'KOR 6', nombre: 'Young-woo Seol' , imagen:'/kor/5.png', stock: 2},
          { id: 'KOR 7', nombre: 'Han-beom Lee' , imagen:'/kor/6.png', stock: 2},
          { id: 'KOR 8', nombre: 'Tae-seok Lee' , imagen:'/kor/7.png', stock: 0},
          { id: 'KOR 9', nombre: 'Myung-jae Lee' , imagen:'/kor/8.png', stock: 0},
          { id: 'KOR 10', nombre: 'Jae-sung Lee' , imagen:'/kor/9.png', stock: 0},
          { id: 'KOR 11', nombre: 'In-beom Hwang' , imagen:'/kor/10.png', stock: 1},
          { id: 'KOR 12', nombre: 'Kang-in Lee' , imagen:'/kor/11.png', stock: 0},
          { id: 'KOR 14', nombre: 'Seung-ho Paik' , imagen:'/kor/12.png', stock: 0},
          { id: 'KOR 15', nombre: 'Jens Castrop' , imagen:'/kor/13.png', stock: 1},
          { id: 'KOR 16', nombre: 'Dong-gyeong Lee' , imagen:'/kor/14.png', stock: 0},
          { id: 'KOR 17', nombre: 'Gue-sung Cho' , imagen:'/kor/15.png', stock: 0},
          { id: 'KOR 18', nombre: 'Heung-min Son' , imagen:'/kor/16.png', stock: 0},
          { id: 'KOR 19', nombre: 'Hee-chan Hwang' , imagen:'/kor/17.png', stock: 1},
          { id: 'KOR 20', nombre: 'Hyeon-Gyu Oh' , imagen:'/kor/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇿 Chequia',
        jugadores: [
          { id: 'CZE 2', nombre: 'Matej Kovar' , imagen:'/cze/1.png', stock: 2},
          { id: 'CZE 3', nombre: 'Jindrich Stanek' , imagen:'/cze/2.png', stock: 2},
          { id: 'CZE 4', nombre: 'Ladislav Krejci' , imagen:'/cze/3.png', stock: 1},
          { id: 'CZE 5', nombre: 'Vladimir Coufal' , imagen:'/cze/4.png', stock: 1},
          { id: 'CZE 6', nombre: 'Jaroslav Zeleny' , imagen:'/cze/5.png', stock: 2},
          { id: 'CZE 7', nombre: 'Tomas Holes' , imagen:'/cze/6.png', stock: 0},
          { id: 'CZE 8', nombre: 'David Zima' , imagen:'/cze/7.png', stock: 1},
          { id: 'CZE 9', nombre: 'Michal Sadilek' , imagen:'/cze/8.png', stock: 2},
          { id: 'CZE 10', nombre: 'Lukas Provod' , imagen:'/cze/9.png', stock: 2},
          { id: 'CZE 11', nombre: 'Lukas Cerv' , imagen:'/cze/10.png', stock: 0},
          { id: 'CZE 12', nombre: 'Tomas Soucek' , imagen:'/cze/11.png', stock: 2},
          { id: 'CZE 14', nombre: 'Pavel Sulc' , imagen:'/cze/12.png', stock: 2},
          { id: 'CZE 15', nombre: 'Matej Vydra' , imagen:'/cze/13.png', stock: 2},
          { id: 'CZE 16', nombre: 'Vasil Kusej' , imagen:'/cze/14.png', stock: 0},
          { id: 'CZE 17', nombre: 'Tomas Chory' , imagen:'/cze/15.png', stock: 1},
          { id: 'CZE 18', nombre: 'Vaclav Cerny' , imagen:'/cze/16.png', stock: 1},
          { id: 'CZE 19', nombre: 'Adam Hlozek' , imagen:'/cze/17.png', stock: 0},
          { id: 'CZE 20', nombre: 'Patrik Schick' , imagen:'/cze/18.png', stock: 0},
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
          { id: 'CAN 2', nombre: 'Dayne St. Clair' , imagen:'/can/1.png', stock: 2},
          { id: 'CAN 3', nombre: 'Alphonso Davies' , imagen:'/can/2.png', stock: 0},
          { id: 'CAN 4', nombre: 'Alistair Johnston' , imagen:'/can/3.png', stock: 2},
          { id: 'CAN 5', nombre: 'Samuel Adekugbe' , imagen:'/can/4.png', stock: 0},
          { id: 'CAN 6', nombre: 'Richie Laryea' , imagen:'/can/5.png', stock: 1},
          { id: 'CAN 7', nombre: 'Derek Cornelius' , imagen:'/can/6.png', stock: 0},
          { id: 'CAN 8', nombre: 'Moïse Bombito' , imagen:'/can/7.png', stock: 3},
          { id: 'CAN 9', nombre: 'Kamal Miller' , imagen:'/can/8.png', stock: 0},
          { id: 'CAN 10', nombre: 'Stephen Eustáquio' , imagen:'/can/9.png', stock: 1},
          { id: 'CAN 11', nombre: 'Ismaël Koné' , imagen:'/can/10.png', stock: 0},
          { id: 'CAN 12', nombre: 'Jonathan Osorio' , imagen:'/can/11.png', stock: 3},
          { id: 'CAN 14', nombre: 'Jacob Shaffelburg' , imagen:'/can/12.png', stock: 0},
          { id: 'CAN 15', nombre: 'Mathieu Choinière' , imagen:'/can/13.png', stock: 1},
          { id: 'CAN 16', nombre: 'Niko Sigur' , imagen:'/can/14.png', stock: 1},
          { id: 'CAN 17', nombre: 'Tajon Buchanan' , imagen:'/can/15.png', stock: 0},
          { id: 'CAN 18', nombre: 'Liam Millar' , imagen:'/can/16.png', stock: 0},
          { id: 'CAN 19', nombre: 'Cyle Larin' , imagen:'/can/17.png', stock: 0},
          { id: 'CAN 20', nombre: 'Jonathan David' , imagen:'/can/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇭 Suiza',
        jugadores: [
          { id: 'SUI 2', nombre: 'Gregor Kobel', imagen:'/sui/1.png', stock: 2 },
          { id: 'SUI 3', nombre: 'Yvon Mvogo' , imagen:'/sui/2.png', stock: 2},
          { id: 'SUI 4', nombre: 'Manuel Akanji', imagen:'/sui/3.png' , stock: 3},
          { id: 'SUI 5', nombre: 'Ricardo Rodriguez' , imagen:'/sui/4.png', stock: 0},
          { id: 'SUI 6', nombre: 'Nico Elvedi' , imagen:'/sui/5.png', stock: 2},
          { id: 'SUI 7', nombre: 'Aurèle Amenda' , imagen:'/sui/6.png', stock: 0},
          { id: 'SUI 8', nombre: 'Silvan Widmer' , imagen:'/sui/7.png', stock: 2},
          { id: 'SUI 9', nombre: 'Granit Xhaka' , imagen:'/sui/8.png', stock: 1},
          { id: 'SUI 10', nombre: 'Denis Zakaria' , imagen:'/sui/9.png', stock: 5},
          { id: 'SUI 11', nombre: 'Remo Freuler' , imagen:'/sui/10.png', stock: 1},
          { id: 'SUI 12', nombre: 'Fabian Rieder' , imagen:'/sui/11.png', stock: 3},
          { id: 'SUI 14', nombre: 'Ardon Jashari' , imagen:'/sui/12.png', stock: 2},
          { id: 'SUI 15', nombre: 'Johan Manzambi' , imagen:'/sui/13.png', stock: 3},
          { id: 'SUI 16', nombre: 'Michel Aebischer' , imagen:'/sui/14.png', stock: 2},
          { id: 'SUI 17', nombre: 'Breel Embolo' , imagen:'/sui/15.png', stock: 2},
          { id: 'SUI 18', nombre: 'Ruben Vargas' , imagen:'/sui/16.png', stock: 0},
          { id: 'SUI 19', nombre: 'Dan Ndoye' , imagen:'/sui/17.png', stock: 1},
          { id: 'SUI 20', nombre: 'Zeki Amdouni' , imagen:'/sui/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇶🇦 Catar',
        jugadores: [
          { id: 'QAT 2', nombre: 'Meshaal Barsham' , imagen:'/qat/1.png', stock: 1},
          { id: 'QAT 3', nombre: 'Sultan Albrake' , imagen:'/qat/2.png', stock: 1},
          { id: 'QAT 4', nombre: 'Lucas Mendes' , imagen:'/qat/3.png', stock: 2},
          { id: 'QAT 5', nombre: 'Homam Ahmed' , imagen:'/qat/4.png', stock: 0},
          { id: 'QAT 6', nombre: 'Boualem Khoukhi' , imagen:'/qat/5.png', stock: 3},
          { id: 'QAT 7', nombre: 'Pedro Miguel' , imagen:'/qat/6.png', stock: 3},
          { id: 'QAT 8', nombre: 'Tarek Salman' , imagen:'/qat/7.png', stock: 2},
          { id: 'QAT 9', nombre: 'Mohammed Al-Mannai', imagen:'/qat/8.png' , stock: 0},
          { id: 'QAT 10', nombre: 'Karim Boudiaf' , imagen:'/qat/9.png', stock: 3},
          { id: 'QAT 11', nombre: 'Assim Madibo' , imagen:'/qat/10.png', stock: 3},
          { id: 'QAT 12', nombre: 'Ahmed Fatehi' , imagen:'/qat/11.png', stock: 2},
          { id: 'QAT 14', nombre: 'Mohammed Waad' , imagen:'/qat/12.png', stock: 1},
          { id: 'QAT 15', nombre: 'Abdulaziz Hatem' , imagen:'/qat/13.png', stock: 2},
          { id: 'QAT 16', nombre: 'Hassan Al-Haydos', imagen:'/qat/14.png' , stock: 0},
          { id: 'QAT 17', nombre: 'Edmilson Junior' , imagen:'/qat/15.png', stock: 2},
          { id: 'QAT 18', nombre: 'Akram Hassan Afif' , imagen:'/qat/16.png', stock: 2},
          { id: 'QAT 19', nombre: 'Ahmed Al-Ganehi' , imagen:'/qat/17.png', stock: 1},
          { id: 'QAT 20', nombre: 'Almoez Ali' , imagen:'/qat/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇧🇦 Bosnia y Herzegovina',
        jugadores: [
          { id: 'BIH 2', nombre: 'Nikola Vasilj' , imagen:'/bih/1.png', stock: 1},
          { id: 'BIH 3', nombre: 'Amer Dedić' , imagen:'/bih/2.png', stock: 0},
          { id: 'BIH 4', nombre: 'Sead Kolašinac' , imagen:'/bih/3.png', stock: 0},
          { id: 'BIH 5', nombre: 'Tarik Muharemović' , imagen:'/bih/4.png', stock: 2},
          { id: 'BIH 6', nombre: 'Nihad Mujakić', imagen:'/bih/5.png' , stock: 3},
          { id: 'BIH 7', nombre: 'Nikola Katić' , imagen:'/bih/6.png', stock: 0},
          { id: 'BIH 8', nombre: 'Amir Hadžiahmetović' , imagen:'/bih/7.png', stock: 1},
          { id: 'BIH 9', nombre: 'Benjamin Tahirović' , imagen:'/bih/8.png', stock: 1},
          { id: 'BIH 10', nombre: 'Armin Gigović' , imagen:'/bih/9.png', stock: 0},
          { id: 'BIH 11', nombre: 'Ivan Šunjić' , imagen:'/bih/10.png', stock: 0},
          { id: 'BIH 12', nombre: 'Ivan Bašić' , imagen:'/bih/11.png', stock: 0},
          { id: 'BIH 14', nombre: 'Dženis Burnić' , imagen:'/bih/12.png', stock: 2},
          { id: 'BIH 15', nombre: 'Esmir Bajraktarević' , imagen:'/bih/13.png', stock: 1},
          { id: 'BIH 16', nombre: 'Amar Memić' , imagen:'/bih/14.png', stock: 2},
          { id: 'BIH 17', nombre: 'Ermedin Demirović' , imagen:'/bih/15.png', stock: 0},
          { id: 'BIH 18', nombre: 'Edin Džeko' , imagen:'/bih/16.png', stock: 3},
          { id: 'BIH 19', nombre: 'Samed Baždar' , imagen:'/bih/17.png', stock: 0},
          { id: 'BIH 20', nombre: 'Haris Tabaković' , imagen:'/bih/18.png', stock: 0},
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
          { id: 'BRA 2', nombre: 'Alisson' , imagen:'/bra/1.png', stock: 1},
          { id: 'BRA 3', nombre: 'Bento' , imagen:'/bra/2.png', stock: 0},
          { id: 'BRA 4', nombre: 'Marquinhos' , imagen:'/bra/3.png', stock: 3},
          { id: 'BRA 5', nombre: 'Éder Militão' , imagen:'/bra/4.png', stock: 0},
          { id: 'BRA 6', nombre: 'Gabriel Magalhães' , imagen:'/bra/5.png', stock: 2},
          { id: 'BRA 7', nombre: 'Danilo' , imagen:'/bra/6.png', stock: 0},
          { id: 'BRA 8', nombre: 'Wesley' , imagen:'/bra/7.png', stock: 2},
          { id: 'BRA 9', nombre: 'Lucas Paquetá' , imagen:'/bra/8.png', stock: 0},
          { id: 'BRA 10', nombre: 'Casemiro' , imagen:'/bra/9.png', stock: 2},
          { id: 'BRA 11', nombre: 'Bruno Guimarães' , imagen:'/bra/10.png', stock: 0},
          { id: 'BRA 12', nombre: 'Luiz Henrique' , imagen:'/bra/11.png', stock: 1},
          { id: 'BRA 14', nombre: 'Vinícius Júnior' , imagen:'/bra/12.png', stock: 0},
          { id: 'BRA 15', nombre: 'Rodrygo' , imagen:'/bra/13.png', stock: 3},
          { id: 'BRA 16', nombre: 'João Pedro' , imagen:'/bra/14.png', stock: 0},
          { id: 'BRA 17', nombre: 'Matheus Cunha' , imagen:'/bra/15.png', stock: 2},
          { id: 'BRA 18', nombre: 'Gabriel Martinelli' , imagen:'/bra/16.png', stock: 0},
          { id: 'BRA 19', nombre: 'Raphinha' , imagen:'/bra/17.png', stock: 1},
          { id: 'BRA 20', nombre: 'Estêvão' , imagen:'/bra/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇲🇦 Marruecos',
        jugadores: [
          { id: 'MAR 2', nombre: 'Yassine Bounou' , imagen:'/mar/1.png', stock: 0},
          { id: 'MAR 3', nombre: 'Munir El Kajoui' , imagen:'/mar/2.png', stock: 1},
          { id: 'MAR 4', nombre: 'Achraf Hakimi' , imagen:'/mar/3.png', stock: 0},
          { id: 'MAR 5', nombre: 'Noussair Mazraoui' , imagen:'/mar/4.png', stock: 2},
          { id: 'MAR 6', nombre: 'Nayef Aguerd' , imagen:'/mar/5.png', stock: 1},
          { id: 'MAR 7', nombre: 'Romain Saïss' , imagen:'/mar/6.png', stock: 1},
          { id: 'MAR 8', nombre: 'Jawad El Yamiq' , imagen:'/mar/7.png', stock: 0},
          { id: 'MAR 9', nombre: 'Adam Masina' , imagen:'/mar/8.png', stock: 0},
          { id: 'MAR 10', nombre: 'Sofyan Amrabat' , imagen:'/mar/9.png', stock: 1},
          { id: 'MAR 11', nombre: 'Azzedine Ounahi' , imagen:'/mar/10.png', stock: 1},
          { id: 'MAR 12', nombre: 'Eliesse Ben Seghir' , imagen:'/mar/11.png', stock: 1},
          { id: 'MAR 14', nombre: 'Bilal El Khannouss' , imagen:'/mar/12.png', stock: 1},
          { id: 'MAR 15', nombre: 'Ismaël Saibari' , imagen:'/mar/13.png', stock: 0},
          { id: 'MAR 16', nombre: 'Youssef En-Nesyri' , imagen:'/mar/14.png', stock: 1},
          { id: 'MAR 17', nombre: 'Abde Ezzalzouli' , imagen:'/mar/15.png', stock: 0},
          { id: 'MAR 18', nombre: 'Soufiane Rahimi' , imagen:'/mar/16.png', stock: 1},
          { id: 'MAR 19', nombre: 'Brahim Díaz' , imagen:'/mar/17.png', stock: 0},
          { id: 'MAR 20', nombre: 'Ayoub El Kaabi' , imagen:'/mar/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇭🇹 Haití',
        jugadores: [
          { id: 'HAI 2', nombre: 'Johny Placide' , imagen:'/hai/1.png', stock: 1},
          { id: 'HAI 3', nombre: 'Carlens Arcus' , imagen:'/hai/2.png', stock: 2},
          { id: 'HAI 4', nombre: 'Martin Expérience' , imagen:'/hai/3.png', stock: 0},
          { id: 'HAI 5', nombre: 'Jean-Kévin Duverne' , imagen:'/hai/4.png', stock: 0},
          { id: 'HAI 6', nombre: 'Ricardo Adé' , imagen:'/hai/5.png', stock: 2},
          { id: 'HAI 7', nombre: 'Duke Lacroix' , imagen:'/hai/6.png', stock: 1},
          { id: 'HAI 8', nombre: 'Garven Metusala' , imagen:'/hai/7.png', stock: 0},
          { id: 'HAI 9', nombre: 'Hannes Delcroix' , imagen:'/hai/8.png', stock: 0},
          { id: 'HAI 10', nombre: 'Leverton Pierre' , imagen:'/hai/9.png', stock: 2},
          { id: 'HAI 11', nombre: 'Danley Jean Jacques' , imagen:'/hai/10.png', stock: 0},
          { id: 'HAI 12', nombre: 'Jean-Ricner Bellegarde' , imagen:'/hai/11.png', stock: 0},
          { id: 'HAI 14', nombre: 'Christopher Attys' , imagen:'/hai/12.png', stock: 0},
          { id: 'HAI 15', nombre: 'Derrick Etienne Jr.' , imagen:'/hai/13.png', stock: 0},
          { id: 'HAI 16', nombre: 'Josué Casimir' , imagen:'/hai/14.png', stock: 1},
          { id: 'HAI 17', nombre: 'Ruben Providence' , imagen:'/hai/15.png', stock: 0},
          { id: 'HAI 18', nombre: 'Duckens Nazon' , imagen:'/hai/16.png', stock: 0},
          { id: 'HAI 19', nombre: 'Louicius Deedson' , imagen:'/hai/17.png', stock: 0},
          { id: 'HAI 20', nombre: 'Frantzdy Pierrot' , imagen:'/hai/18.png', stock: 2},
        ],
      },
      {
        nombre: '🏴 Escocia',
        jugadores: [
          { id: 'SCO 2', nombre: 'Angus Gunn' , imagen:'/sco/1.png', stock: 0},
          { id: 'SCO 3', nombre: 'Jack Hendry' , imagen:'/sco/2.png', stock: 2},
          { id: 'SCO 4', nombre: 'Kieran Tierney' , imagen:'/sco/3.png', stock: 0},
          { id: 'SCO 5', nombre: 'Aaron Hickey' , imagen:'/sco/4.png', stock: 0},
          { id: 'SCO 6', nombre: 'Andrew Robertson' , imagen:'/sco/5.png', stock: 1},
          { id: 'SCO 7', nombre: 'Scott McKenna' , imagen:'/sco/6.png', stock: 1},
          { id: 'SCO 8', nombre: 'John Souttar' , imagen:'/sco/7.png', stock: 1},
          { id: 'SCO 9', nombre: 'Anthony Ralston' , imagen:'/sco/8.png', stock: 1},
          { id: 'SCO 10', nombre: 'Grant Hanley' , imagen:'/sco/9.png', stock: 0},
          { id: 'SCO 11', nombre: 'Scott McTominay' , imagen:'/sco/10.png', stock: 0},
          { id: 'SCO 12', nombre: 'Billy Gilmour' , imagen:'/sco/11.png', stock: 0},
          { id: 'SCO 14', nombre: 'Lewis Ferguson' , imagen:'/sco/12.png', stock: 1},
          { id: 'SCO 15', nombre: 'Ryan Christie' , imagen:'/sco/13.png', stock: 1},
          { id: 'SCO 16', nombre: 'Kenny McLean' , imagen:'/sco/14.png', stock: 0},
          { id: 'SCO 17', nombre: 'John McGinn' , imagen:'/sco/15.png', stock: 0},
          { id: 'SCO 18', nombre: 'Lyndon Dykes' , imagen:'/sco/16.png', stock: 0},
          { id: 'SCO 19', nombre: 'Che Adams' , imagen:'/sco/17.png', stock: 2},
          { id: 'SCO 20', nombre: 'Ben Gannon-Doak' , imagen:'/sco/18.png', stock: 1},
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
          { id: 'USA 2', nombre: 'Matt Freese' , imagen:'/usa/1.png', stock: 2},
          { id: 'USA 3', nombre: 'Chris Richards' , imagen:'/usa/2.png', stock: 0},
          { id: 'USA 4', nombre: 'Tim Ream' , imagen:'/usa/3.png', stock: 0},
          { id: 'USA 5', nombre: 'Mark McKenzie' , imagen:'/usa/4.png', stock: 3},
          { id: 'USA 6', nombre: 'Alex Freeman', imagen:'/usa/5.png' , stock: 0},
          { id: 'USA 7', nombre: 'Antonee Robinson' , imagen:'/usa/6.png', stock: 0},
          { id: 'USA 8', nombre: 'Tyler Adams' , imagen:'/usa/7.png', stock: 3},
          { id: 'USA 9', nombre: 'Tanner Tessmann' , imagen:'/usa/8.png', stock: 3},
          { id: 'USA 10', nombre: 'Weston McKennie' , imagen:'/usa/9.png', stock: 0},
          { id: 'USA 11', nombre: 'Christian Roldan' , imagen:'/usa/10.png', stock: 0},
          { id: 'USA 12', nombre: 'Timothy Weah' , imagen:'/usa/11.png', stock: 3},
          { id: 'USA 14', nombre: 'Diego Luna' , imagen:'/usa/12.png', stock: 2},
          { id: 'USA 15', nombre: 'Malik Tillman' , imagen:'/usa/13.png', stock: 3},
          { id: 'USA 16', nombre: 'Christian Pulisic' , imagen:'/usa/14.png', stock: 0},
          { id: 'USA 17', nombre: 'Brenden Aaronson' , imagen:'/usa/15.png', stock: 3},
          { id: 'USA 18', nombre: 'Ricardo Pepi' , imagen:'/usa/16.png', stock: 2},
          { id: 'USA 19', nombre: 'Haji Wright' , imagen:'/usa/17.png', stock: 3},
          { id: 'USA 20', nombre: 'Folarin Balogun' , imagen:'/usa/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇵🇾 Paraguay',
        jugadores: [
          { id: 'PAR 2', nombre: 'Roberto Fernández', imagen:'/par/1.png', stock: 1 },
          { id: 'PAR 3', nombre: 'Orlando Gill' , imagen:'/par/2.png', stock: 1},
          { id: 'PAR 4', nombre: 'Gustavo Gómez' , imagen:'/par/3.png', stock: 1},
          { id: 'PAR 5', nombre: 'Fabián Balbuena' , imagen:'/par/4.png', stock: 1},
          { id: 'PAR 6', nombre: 'Juan José Cáceres' , imagen:'/par/5.png', stock: 0},
          { id: 'PAR 7', nombre: 'Omar Alderete' , imagen:'/par/6.png', stock: 1},
          { id: 'PAR 8', nombre: 'Junior Alonso' , imagen:'/par/7.png', stock: 0},
          { id: 'PAR 9', nombre: 'Mathías Villasanti', imagen:'/par/8.png' , stock: 1},
          { id: 'PAR 10', nombre: 'Diego Gómez' , imagen:'/par/9.png', stock: 0},
          { id: 'PAR 11', nombre: 'Damián Bobadilla' , imagen:'/par/10.png', stock: 2},
          { id: 'PAR 12', nombre: 'Andrés Cubas' , imagen:'/par/11.png', stock: 1},
          { id: 'PAR 14', nombre: 'Matías Galarza Fonda' , imagen:'/par/12.png', stock: 2},
          { id: 'PAR 15', nombre: 'Julio Enciso' , imagen:'/par/13.png', stock: 0},
          { id: 'PAR 16', nombre: 'Alejandro Romero Gamarra' , imagen:'/par/14.png', stock: 1},
          { id: 'PAR 17', nombre: 'Miguel Almirón' , imagen:'/par/15.png', stock: 1},
          { id: 'PAR 18', nombre: 'Ramón Sosa' , imagen:'/par/16.png', stock: 1},
          { id: 'PAR 19', nombre: 'Ángel Romero' , imagen:'/par/17.png', stock: 2},
          { id: 'PAR 20', nombre: 'Antonio Sanabria' , imagen:'/par/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇦🇺 Australia',
        jugadores: [
          { id: 'AUS 2', nombre: 'Mathew Ryan' , imagen:'/aus/1.png', stock: 0},
          { id: 'AUS 3', nombre: 'Joe Gauci', imagen:'/aus/2.png' , stock: 0},
          { id: 'AUS 4', nombre: 'Harry Souttar' , imagen:'/aus/3.png', stock: 1},
          { id: 'AUS 5', nombre: 'Alessandro Circati' , imagen:'/aus/4.png', stock: 0},
          { id: 'AUS 6', nombre: 'Jordan Bos' , imagen:'/aus/5.png', stock: 2},
          { id: 'AUS 7', nombre: 'Aziz Behich' , imagen:'/aus/6.png', stock: 2},
          { id: 'AUS 8', nombre: 'Cameron Burgess' , imagen:'/aus/7.png', stock: 0},
          { id: 'AUS 9', nombre: 'Lewis Miller' , imagen:'/aus/8.png', stock: 0},
          { id: 'AUS 10', nombre: 'Milos Degenek' , imagen:'/aus/9.png', stock: 3},
          { id: 'AUS 11', nombre: 'Jackson Irvine' , imagen:'/aus/10.png', stock: 1},
          { id: 'AUS 12', nombre: 'Riley McGree' , imagen:'/aus/11.png', stock: 2},
          { id: 'AUS 14', nombre: "Aiden O'Neill" , imagen:'/aus/12.png', stock: 0},
          { id: 'AUS 15', nombre: 'Connor Metcalfe' , imagen:'/aus/13.png', stock: 0},
          { id: 'AUS 16', nombre: 'Patrick Yazbek' , imagen:'/aus/14.png', stock: 1},
          { id: 'AUS 17', nombre: 'Craig Goodwin' , imagen:'/aus/15.png', stock: 1},
          { id: 'AUS 18', nombre: 'Kusini Yengi' , imagen:'/aus/16.png', stock: 0},
          { id: 'AUS 19', nombre: 'Nestory Irankunda' , imagen:'/aus/17.png', stock: 0},
          { id: 'AUS 20', nombre: 'Mohamed Touré' , imagen:'/aus/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇹🇷 Turquía',
        jugadores: [
          { id: 'TUR 2', nombre: 'Uğurcan Çakır' , imagen:'/tur/1.png' , stock: 0},
          { id: 'TUR 3', nombre: 'Mert Müldür' , imagen:'/tur/2.png', stock: 1},
          { id: 'TUR 4', nombre: 'Zeki Çelik' , imagen:'/tur/3.png', stock: 0},
          { id: 'TUR 5', nombre: 'Abdülkerim Bardakcı', imagen:'/tur/4.png' , stock: 0},
          { id: 'TUR 6', nombre: 'Çağlar Söyüncü' , imagen:'/tur/5.png', stock: 0},
          { id: 'TUR 7', nombre: 'Merih Demiral' , imagen:'/tur/6.png', stock: 0},
          { id: 'TUR 8', nombre: 'Ferdi Kadıoğlu' , imagen:'/tur/7.png', stock: 2},
          { id: 'TUR 9', nombre: 'Kaan Ayhan' , imagen:'/tur/8.png', stock: 0},
          { id: 'TUR 10', nombre: 'İsmail Yüksek' , imagen:'/tur/9.png', stock: 0},
          { id: 'TUR 11', nombre: 'Hakan Çalhanoğlu' , imagen:'/tur/10.png', stock: 3},
          { id: 'TUR 12', nombre: 'Orkun Kökçü' , imagen:'/tur/11.png', stock: 1},
          { id: 'TUR 14', nombre: 'Arda Güler' , imagen:'/tur/12.png', stock: 0},
          { id: 'TUR 15', nombre: 'İrfan Can Kahveci' , imagen:'/tur/13.png', stock: 0},
          { id: 'TUR 16', nombre: 'Yunus Akgün' , imagen:'/tur/14.png', stock: 2},
          { id: 'TUR 17', nombre: 'Can Uzun' , imagen:'/tur/15.png', stock: 2},
          { id: 'TUR 18', nombre: 'Barış Alper Yılmaz' , imagen:'/tur/16.png', stock: 0},
          { id: 'TUR 19', nombre: 'Kerem Aktürkoğlu' , imagen:'/tur/17.png', stock: 0},
          { id: 'TUR 20', nombre: 'Kenan Yıldız' , imagen:'/tur/18.png', stock: 0},
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
          { id: 'GER 2', nombre: 'Marc-André ter Stegen' , imagen:'/ger/1.png', stock: 0},
          { id: 'GER 3', nombre: 'Jonathan Tah' , imagen:'/ger/2.png', stock: 1},
          { id: 'GER 4', nombre: 'David Raum' , imagen:'/ger/3.png', stock: 1},
          { id: 'GER 5', nombre: 'Nico Schlotterbeck' , imagen:'/ger/4.png', stock: 1},
          { id: 'GER 6', nombre: 'Antonio Rüdiger' , imagen:'/ger/5.png', stock: 0},
          { id: 'GER 7', nombre: 'Waldemar Anton' , imagen:'/ger/6.png', stock: 0},
          { id: 'GER 8', nombre: 'Ridle Baku' , imagen:'/ger/7.png', stock: 0},
          { id: 'GER 9', nombre: 'Maximilian Mittelstädt' , imagen:'/ger/8.png', stock: 2},
          { id: 'GER 10', nombre: 'Joshua Kimmich' , imagen:'/ger/9.png', stock: 0},
          { id: 'GER 11', nombre: 'Florian Wirtz' , imagen:'/ger/10.png', stock: 2},
          { id: 'GER 12', nombre: 'Felix Nmecha' , imagen:'/ger/11.png', stock: 1},
          { id: 'GER 14', nombre: 'Leon Goretzka' , imagen:'/ger/12.png', stock: 1},
          { id: 'GER 15', nombre: 'Jamal Musiala' , imagen:'/ger/13.png', stock: 1},
          { id: 'GER 16', nombre: 'Serge Gnabry' , imagen:'/ger/14.png', stock: 1},
          { id: 'GER 17', nombre: 'Kai Havertz' , imagen:'/ger/15.png', stock: 0},
          { id: 'GER 18', nombre: 'Leroy Sané' , imagen:'/ger/16.png', stock: 0},
          { id: 'GER 19', nombre: 'Karim Adeyemi' , imagen:'/ger/17.png', stock: 0},
          { id: 'GER 20', nombre: 'Nick Woltemade' , imagen:'/ger/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇼 Curazao',
        jugadores: [
          { id: 'CUW 2', nombre: 'Eloy Room' , imagen:'/cuw/1.png', stock: 2},
          { id: 'CUW 3', nombre: 'Armando Obispo' , imagen:'/cuw/2.png', stock: 0},
          { id: 'CUW 4', nombre: 'Sherel Floranus' , imagen:'/cuw/3.png', stock: 2},
          { id: 'CUW 5', nombre: 'Jurien Gaari' , imagen:'/cuw/4.png', stock: 0},
          { id: 'CUW 6', nombre: 'Joshua Brenet' , imagen:'/cuw/5.png', stock: 1},
          { id: 'CUW 7', nombre: 'Roshon van Eijma' , imagen:'/cuw/6.png', stock: 1},
          { id: 'CUW 8', nombre: 'Shurandy Sambo' , imagen:'/cuw/7.png', stock: 2},
          { id: 'CUW 9', nombre: 'Livano Comenencia' , imagen:'/cuw/8.png', stock: 0},
          { id: 'CUW 10', nombre: 'Godfried Roemeratoe' , imagen:'/cuw/9.png', stock: 1},
          { id: 'CUW 11', nombre: 'Juninho Bacuna' , imagen:'/cuw/10.png', stock: 0},
          { id: 'CUW 12', nombre: 'Leandro Bacuna' , imagen:'/cuw/11.png', stock: 2},
          { id: 'CUW 14', nombre: 'Tahith Chong' , imagen:'/cuw/12.png', stock: 1},
          { id: 'CUW 15', nombre: 'Kenji Gorré' , imagen:'/cuw/13.png', stock: 2},
          { id: 'CUW 16', nombre: 'Jearl Margaritha' , imagen:'/cuw/14.png', stock: 2},
          { id: 'CUW 17', nombre: 'Jürgen Locadia' , imagen:'/cuw/15.png', stock: 1},
          { id: 'CUW 18', nombre: 'Jeremy Antonisse' , imagen:'/cuw/16.png', stock: 2},
          { id: 'CUW 19', nombre: 'Gervane Kastaneer' , imagen:'/cuw/17.png', stock: 0},
          { id: 'CUW 20', nombre: 'Sontje Hansen' , imagen:'/cuw/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇨🇮 Costa de Marfil',
        jugadores: [
          { id: 'CIV 2', nombre: 'Yahia Fofana' , imagen:'/civ/1.png', stock: 1},
          { id: 'CIV 3', nombre: 'Ghislain Konan' , imagen:'/civ/2.png', stock: 0},
          { id: 'CIV 4', nombre: 'Wilfried Singo' , imagen:'/civ/3.png', stock: 0},
          { id: 'CIV 5', nombre: 'Odilon Kossounou' , imagen:'/civ/4.png', stock: 0},
          { id: 'CIV 6', nombre: 'Evan Ndicka' , imagen:'/civ/5.png', stock: 2},
          { id: 'CIV 7', nombre: 'Willy Boly' , imagen:'/civ/6.png', stock: 0},
          { id: 'CIV 8', nombre: 'Emmanuel Agbadou' , imagen:'/civ/7.png', stock: 2},
          { id: 'CIV 9', nombre: 'Ousmane Diomande' , imagen:'/civ/8.png', stock: 1},
          { id: 'CIV 10', nombre: 'Franck Kessié' , imagen:'/civ/9.png', stock: 1},
          { id: 'CIV 11', nombre: 'Seko Fofana' , imagen:'/civ/10.png', stock: 1},
          { id: 'CIV 12', nombre: 'Ibrahim Sangaré' , imagen:'/civ/11.png', stock: 2},
          { id: 'CIV 14', nombre: 'Jean-Philippe Gbamin' , imagen:'/civ/12.png', stock: 0},
          { id: 'CIV 15', nombre: 'Amad Diallo' , imagen:'/civ/13.png', stock: 1},
          { id: 'CIV 16', nombre: 'Sébastien Haller' , imagen:'/civ/14.png', stock: 0},
          { id: 'CIV 17', nombre: 'Simon Adingra' , imagen:'/civ/15.png', stock: 2},
          { id: 'CIV 18', nombre: 'Yan Diomande' , imagen:'/civ/16.png', stock: 2},
          { id: 'CIV 19', nombre: 'Evann Guessand' , imagen:'/civ/17.png', stock: 0},
          { id: 'CIV 20', nombre: 'Oumar Diakité' , imagen:'/civ/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇪🇨 Ecuador',
        jugadores: [
          { id: 'ECU 2', nombre: 'Hernán Galíndez' , imagen:'/ecu/1.png' , stock: 0},
          { id: 'ECU 3', nombre: 'Gonzalo Valle' , imagen:'/ecu/2.png', stock: 2},
          { id: 'ECU 4', nombre: 'Piero Hincapié' , imagen:'/ecu/3.png', stock: 0},
          { id: 'ECU 5', nombre: 'Pervis Estupiñán' , imagen:'/ecu/4.png', stock: 3},
          { id: 'ECU 6', nombre: 'Willian Pacho' , imagen:'/ecu/5.png', stock: 1},
          { id: 'ECU 7', nombre: 'Ángelo Preciado' , imagen:'/ecu/6.png', stock: 0},
          { id: 'ECU 8', nombre: 'Joel Ordóñez' , imagen:'/ecu/7.png', stock: 0},
          { id: 'ECU 9', nombre: 'Moisés Caicedo' , imagen:'/ecu/8.png', stock: 2},
          { id: 'ECU 10', nombre: 'Alan Franco' , imagen:'/ecu/9.png', stock: 0},
          { id: 'ECU 11', nombre: 'Kendry Páez' , imagen:'/ecu/10.png', stock: 0},
          { id: 'ECU 12', nombre: 'Pedro Vite' , imagen:'/ecu/11.png', stock: 0},
          { id: 'ECU 14', nombre: 'John Yeboah' , imagen:'/ecu/12.png', stock: 2},
          { id: 'ECU 15', nombre: 'Leonardo Campana' , imagen:'/ecu/13.png', stock: 1},
          { id: 'ECU 16', nombre: 'Gonzalo Plata' , imagen:'/ecu/14.png', stock: 0},
          { id: 'ECU 17', nombre: 'Nilson Angulo' , imagen:'/ecu/15.png', stock: 1},
          { id: 'ECU 18', nombre: 'Alan Minda' , imagen:'/ecu/16.png', stock: 1},
          { id: 'ECU 19', nombre: 'Kevin Rodríguez' , imagen:'/ecu/17.png', stock: 0},
          { id: 'ECU 20', nombre: 'Enner Valencia' , imagen:'/ecu/18.png', stock: 0},
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
          { id: 'NED 2', nombre: 'Bart Verbruggen' , imagen:'/ned/1.png', stock: 2},
          { id: 'NED 3', nombre: 'Virgil van Dijk' , imagen:'/ned/2.png', stock: 1},
          { id: 'NED 4', nombre: 'Micky van de Ven' , imagen:'/ned/3.png', stock: 1},
          { id: 'NED 5', nombre: 'Jurriën Timber' , imagen:'/ned/4.png', stock: 1},
          { id: 'NED 6', nombre: 'Denzel Dumfries' , imagen:'/ned/5.png', stock: 2},
          { id: 'NED 7', nombre: 'Nathan Aké' , imagen:'/ned/6.png', stock: 2},
          { id: 'NED 8', nombre: 'Jeremie Frimpong' , imagen:'/ned/7.png', stock: 1},
          { id: 'NED 9', nombre: 'Jan Paul van Hecke' , imagen:'/ned/8.png', stock: 1},
          { id: 'NED 10', nombre: 'Tijjani Reijnders' , imagen:'/ned/9.png', stock: 1},
          { id: 'NED 11', nombre: 'Ryan Gravenberch' , imagen:'/ned/10.png', stock: 2},
          { id: 'NED 12', nombre: 'Teun Koopmeiners' , imagen:'/ned/11.png', stock: 3},
          { id: 'NED 14', nombre: 'Frenkie de Jong' , imagen:'/ned/12.png', stock: 0},
          { id: 'NED 15', nombre: 'Xavi Simons' , imagen:'/ned/13.png', stock: 1},
          { id: 'NED 16', nombre: 'Justin Kluivert' , imagen:'/ned/14.png', stock: 2},
          { id: 'NED 17', nombre: 'Memphis Depay' , imagen:'/ned/15.png', stock: 1},
          { id: 'NED 18', nombre: 'Donyell Malen' , imagen:'/ned/16.png', stock: 0},
          { id: 'NED 19', nombre: 'Wout Weghorst' , imagen:'/ned/17.png', stock: 3},
          { id: 'NED 20', nombre: 'Cody Gakpo' , imagen:'/ned/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇯🇵 Japón',
        jugadores: [
          { id: 'JPN 2', nombre: 'Zion Suzuki' , imagen:'/jpn/1.png', stock: 0},
          { id: 'JPN 3', nombre: 'Henry Heroki Mochizuki' , imagen:'/jpn/2.png', stock: 3},
          { id: 'JPN 4', nombre: 'Ayumu Seko' , imagen:'/jpn/3.png', stock: 0},
          { id: 'JPN 5', nombre: 'Junnosuke Suzuki' , imagen:'/jpn/4.png', stock: 1},
          { id: 'JPN 6', nombre: 'Shogo Taniguchi' , imagen:'/jpn/5.png', stock: 1},
          { id: 'JPN 7', nombre: 'Tsuyoshi Watanabe' , imagen:'/jpn/6.png', stock: 0},
          { id: 'JPN 8', nombre: 'Kaishu Sano' , imagen:'/jpn/7.png', stock: 2},
          { id: 'JPN 9', nombre: 'Yuki Soma' , imagen:'/jpn/8.png', stock: 2},
          { id: 'JPN 10', nombre: 'Ao Tanaka' , imagen:'/jpn/9.png', stock: 0},
          { id: 'JPN 11', nombre: 'Daichi Kamada' , imagen:'/jpn/10.png', stock: 0},
          { id: 'JPN 12', nombre: 'Takefusa Kubo' , imagen:'/jpn/11.png', stock: 3},
          { id: 'JPN 14', nombre: 'Ritsu Doan' , imagen:'/jpn/12.png', stock: 3},
          { id: 'JPN 15', nombre: 'Keito Nakamura' , imagen:'/jpn/13.png', stock: 2},
          { id: 'JPN 16', nombre: 'Takumi Minamino' , imagen:'/jpn/14.png', stock: 1},
          { id: 'JPN 17', nombre: 'Shuto Machino' , imagen:'/jpn/15.png', stock: 2},
          { id: 'JPN 18', nombre: 'Junya Ito' , imagen:'/jpn/16.png', stock: 2},
          { id: 'JPN 19', nombre: 'Koki Ogawa' , imagen:'/jpn/17.png', stock: 0},
          { id: 'JPN 20', nombre: 'Ayase Ueda' , imagen:'/jpn/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇸🇪 Suecia',
        jugadores: [
          { id: 'SWE 2', nombre: 'Victor Johansson' , imagen:'/swe/1.png', stock: 0},
          { id: 'SWE 3', nombre: 'Isak Hien' , imagen:'/swe/2.png', stock: 0},
          { id: 'SWE 4', nombre: 'Gabriel Gudmundsson' , imagen:'/swe/3.png', stock: 2},
          { id: 'SWE 5', nombre: 'Emil Holm' , imagen:'/swe/4.png', stock: 1},
          { id: 'SWE 6', nombre: 'Victor Nilsson Lindelöf' , imagen:'/swe/5.png', stock: 1},
          { id: 'SWE 7', nombre: 'Gustaf Lagerbielke' , imagen:'/swe/6.png', stock: 1},
          { id: 'SWE 8', nombre: 'Lucas Bergvall' , imagen:'/swe/7.png', stock: 2},
          { id: 'SWE 9', nombre: 'Hugo Larsson' , imagen:'/swe/8.png', stock: 1},
          { id: 'SWE 10', nombre: 'Jesper Karlström' , imagen:'/swe/9.png', stock: 0},
          { id: 'SWE 11', nombre: 'Yasin Ayari' , imagen:'/swe/10.png', stock: 0},
          { id: 'SWE 12', nombre: 'Mattias Svanberg' , imagen:'/swe/11.png', stock: 1},
          { id: 'SWE 14', nombre: 'Daniel Svensson' , imagen:'/swe/12.png', stock: 1},
          { id: 'SWE 15', nombre: 'Ken Sema' , imagen:'/swe/13.png', stock: 2},
          { id: 'SWE 16', nombre: 'Roony Bardghji' , imagen:'/swe/14.png', stock: 0},
          { id: 'SWE 17', nombre: 'Dejan Kulusevski' , imagen:'/swe/15.png', stock: 1},
          { id: 'SWE 18', nombre: 'Anthony Elanga' , imagen:'/swe/16.png', stock: 1},
          { id: 'SWE 19', nombre: 'Alexander Isak' , imagen:'/swe/17.png', stock: 1},
          { id: 'SWE 20', nombre: 'Viktor Gyökeres' , imagen:'/swe/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇹🇳 Túnez',
        jugadores: [
          { id: 'TUN 2', nombre: 'Bechir Ben Said' , imagen:'/tun/1.png', stock: 2},
          { id: 'TUN 3', nombre: 'Aymen Dahmen' , imagen:'/tun/2.png', stock: 2},
          { id: 'TUN 4', nombre: 'Yan Valery' , imagen:'/tun/3.png', stock: 0},
          { id: 'TUN 5', nombre: 'Montassar Talbi' , imagen:'/tun/4.png', stock: 1},
          { id: 'TUN 6', nombre: 'Yassine Meriah' , imagen:'/tun/5.png', stock: 1},
          { id: 'TUN 7', nombre: 'Ali Abdi' , imagen:'/tun/6.png', stock: 0},
          { id: 'TUN 8', nombre: 'Dylan Bronn' , imagen:'/tun/7.png', stock: 3},
          { id: 'TUN 9', nombre: 'Ellyes Skhiri' , imagen:'/tun/8.png', stock: 2},
          { id: 'TUN 10', nombre: 'Aïssa Laidouni', imagen:'/tun/9.png' , stock: 2},
          { id: 'TUN 11', nombre: 'Ferjani Sassi' , imagen:'/tun/10.png', stock: 0},
          { id: 'TUN 12', nombre: 'Mohamed Ali Ben Romdhane' , imagen:'/tun/11.png', stock: 4},
          { id: 'TUN 14', nombre: 'Hannibal Mejbri' , imagen:'/tun/12.png', stock: 2},
          { id: 'TUN 15', nombre: 'Elias Achouri' , imagen:'/tun/13.png', stock: 2},
          { id: 'TUN 16', nombre: 'Elias Saad' , imagen:'/tun/14.png', stock: 2},
          { id: 'TUN 17', nombre: 'Hazem Mastouri' , imagen:'/tun/15.png', stock: 4},
          { id: 'TUN 18', nombre: 'Ismaël Gharbi' , imagen:'/tun/16.png', stock: 2},
          { id: 'TUN 19', nombre: 'Sayfallah Ltaief' , imagen:'/tun/17.png', stock: 1},
          { id: 'TUN 20', nombre: 'Naïm Sliti' , imagen:'/tun/18.png', stock: 0},
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
          { id: 'BEL 2', nombre: 'Thibaut Courtois' , imagen:'/bel/1.png', stock: 0},
          { id: 'BEL 3', nombre: 'Arthur Theate' , imagen:'/bel/2.png', stock: 0},
          { id: 'BEL 4', nombre: 'Timothy Castagne' , imagen:'/bel/3.png', stock: 0},
          { id: 'BEL 5', nombre: 'Zeno Debast', imagen:'/bel/4.png' , stock: 2},
          { id: 'BEL 6', nombre: 'Brandon Mechele', imagen:'/bel/5.png' , stock: 0},
          { id: 'BEL 7', nombre: 'Maxim De Cuyper' , imagen:'/bel/6.png', stock: 0},
          { id: 'BEL 8', nombre: 'Thomas Meunier' , imagen:'/bel/7.png', stock: 1},
          { id: 'BEL 9', nombre: 'Youri Tielemans' , imagen:'/bel/8.png', stock: 2},
          { id: 'BEL 10', nombre: 'Amadou Onana' , imagen:'/bel/9.png', stock: 0},
          { id: 'BEL 11', nombre: 'Nicolas Raskin' , imagen:'/bel/10.png', stock: 0},
          { id: 'BEL 12', nombre: 'Alexis Saelemaekers' , imagen:'/bel/11.png', stock: 1},
          { id: 'BEL 14', nombre: 'Hans Vanaken' , imagen:'/bel/12.png', stock: 1},
          { id: 'BEL 15', nombre: 'Kevin De Bruyne' , imagen:'/bel/13.png', stock: 0},
          { id: 'BEL 16', nombre: 'Jérémy Doku' , imagen:'/bel/14.png', stock: 0},
          { id: 'BEL 17', nombre: 'Charles De Ketelaere' , imagen:'/bel/15.png', stock: 0},
          { id: 'BEL 18', nombre: 'Leandro Trossard' , imagen:'/bel/16.png', stock: 1},
          { id: 'BEL 19', nombre: 'Loïs Openda' , imagen:'/bel/17.png', stock: 2},
          { id: 'BEL 20', nombre: 'Romelu Lukaku' , imagen:'/bel/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇪🇬 Egipto',
        jugadores: [
          { id: 'EGY 2', nombre: 'Mohamed El Shenawy' , imagen:'/egy/1.png', stock: 3},
          { id: 'EGY 3', nombre: 'Mohamed Hany' , imagen:'/egy/2.png', stock: 1},
          { id: 'EGY 4', nombre: 'Mohamed Hamdy' , imagen:'/egy/3.png', stock: 0},
          { id: 'EGY 5', nombre: 'Yasser Ibrahim' , imagen:'/egy/4.png', stock: 0},
          { id: 'EGY 6', nombre: 'Khaled Sobhi' , imagen:'/egy/5.png', stock: 0},
          { id: 'EGY 7', nombre: 'Ramy Rabia' , imagen:'/egy/6.png', stock: 2},
          { id: 'EGY 8', nombre: 'Hossam Abdelmaguid' , imagen:'/egy/7.png', stock: 1},
          { id: 'EGY 9', nombre: 'Ahmed Fatouh' , imagen:'/egy/8.png', stock: 0},
          { id: 'EGY 10', nombre: 'Marwan Attia' , imagen:'/egy/9.png', stock: 3},
          { id: 'EGY 11', nombre: 'Zizo' , imagen:'/egy/10.png', stock: 2},
          { id: 'EGY 12', nombre: 'Hamdy Fathy' , imagen:'/egy/11.png', stock: 0},
          { id: 'EGY 14', nombre: 'Mohamed Lasheen' , imagen:'/egy/12.png', stock: 0},
          { id: 'EGY 15', nombre: 'Emam Ashour' , imagen:'/egy/13.png', stock: 2},
          { id: 'EGY 16', nombre: 'Osama Faisal' , imagen:'/egy/14.png', stock: 0},
          { id: 'EGY 17', nombre: 'Mohamed Salah' , imagen:'/egy/15.png', stock: 0},
          { id: 'EGY 18', nombre: 'Mostafa Mohamed' , imagen:'/egy/16.png', stock: 0},
          { id: 'EGY 19', nombre: 'Trezeguet' , imagen:'/egy/17.png', stock: 0},
          { id: 'EGY 20', nombre: 'Omar Marmoush' , imagen:'/egy/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇮🇷 Irán',
        jugadores: [
          { id: 'IRN 2', nombre: 'Alireza Beiranvand' , imagen:'/irn/1.png' , stock: 0},
          { id: 'IRN 3', nombre: 'Morteza Pouraliganji' , imagen:'/irn/2.png', stock: 0},
          { id: 'IRN 4', nombre: 'Ehsan Hajsafi' , imagen:'/irn/3.png', stock: 1},
          { id: 'IRN 5', nombre: 'Milad Mohammadi' , imagen:'/irn/4.png', stock: 0},
          { id: 'IRN 6', nombre: 'Shojae Khalilzadeh' , imagen:'/irn/5.png', stock: 0},
          { id: 'IRN 7', nombre: 'Ramin Rezaeian' , imagen:'/irn/6.png', stock: 0},
          { id: 'IRN 8', nombre: 'Hossein Kanaani' , imagen:'/irn/7.png', stock: 2},
          { id: 'IRN 9', nombre: 'Sadegh Moharrami' , imagen:'/irn/8.png', stock: 0},
          { id: 'IRN 10', nombre: 'Saleh Hardani' , imagen:'/irn/9.png', stock: 0},
          { id: 'IRN 11', nombre: 'Saeed Ezatolahi' , imagen:'/irn/10.png', stock: 0},
          { id: 'IRN 12', nombre: 'Saman Ghoddos' , imagen:'/irn/11.png', stock: 1},
          { id: 'IRN 14', nombre: 'Omid Noorafkan' , imagen:'/irn/12.png', stock: 2},
          { id: 'IRN 15', nombre: 'Roozbeh Cheshmi' , imagen:'/irn/13.png', stock: 3},
          { id: 'IRN 16', nombre: 'Mohammad Mohebi' , imagen:'/irn/14.png', stock: 0},
          { id: 'IRN 17', nombre: 'Sardar Azmoun' , imagen:'/irn/15.png', stock: 0},
          { id: 'IRN 18', nombre: 'Mehdi Taremi' , imagen:'/irn/16.png', stock: 0},
          { id: 'IRN 19', nombre: 'Alireza Jahanbakhsh' , imagen:'/irn/17.png', stock: 4},
          { id: 'IRN 20', nombre: 'Ali Gholizadeh' , imagen:'/irn/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇳🇿 Nueva Zelanda',
        jugadores: [
          { id: 'NZL 2', nombre: 'Max Crocombe Payne' , imagen:'/nzl/1.png' , stock: 1},
          { id: 'NZL 3', nombre: 'Alex Paulsen' , imagen:'/nzl/2.png', stock: 0},
          { id: 'NZL 4', nombre: 'Michael Boxall' , imagen:'/nzl/3.png', stock: 0},
          { id: 'NZL 5', nombre: 'Liberato Cacace' , imagen:'/nzl/4.png', stock: 0},
          { id: 'NZL 6', nombre: 'Tim Payne' , imagen:'/nzl/5.png', stock: 0},
          { id: 'NZL 7', nombre: 'Tyler Bindon' , imagen:'/nzl/6.png', stock: 0},
          { id: 'NZL 8', nombre: 'Francis de Vries' , imagen:'/nzl/7.png', stock: 0},
          { id: 'NZL 9', nombre: 'Finn Surman' , imagen:'/nzl/8.png', stock: 0},
          { id: 'NZL 10', nombre: 'Joe Bell' , imagen:'/nzl/9.png', stock: 2},
          { id: 'NZL 11', nombre: 'Sarpreet Singh' , imagen:'/nzl/10.png', stock: 0},
          { id: 'NZL 12', nombre: 'Ryan Thomas' , imagen:'/nzl/11.png', stock: 1},
          { id: 'NZL 14', nombre: 'Matthew Garbett' , imagen:'/nzl/12.png', stock: 0},
          { id: 'NZL 15', nombre: 'Marko Stamenic' , imagen:'/nzl/13.png', stock: 2},
          { id: 'NZL 16', nombre: 'Ben Old' , imagen:'/nzl/14.png', stock: 0},
          { id: 'NZL 17', nombre: 'Chris Wood' , imagen:'/nzl/15.png', stock: 1},
          { id: 'NZL 18', nombre: 'Elijah Just' , imagen:'/nzl/16.png', stock: 0},
          { id: 'NZL 19', nombre: 'Callum McCowatt' , imagen:'/nzl/17.png', stock: 0},
          { id: 'NZL 20', nombre: 'Kosta Barbarouses' , imagen:'/nzl/18.png', stock: 1},
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
          { id: 'ESP 2', nombre: 'Unai Simón' , imagen:'/esp/1.png', stock: 0},
          { id: 'ESP 3', nombre: 'Robin Le Normand' , imagen:'/esp/2.png', stock: 2},
          { id: 'ESP 4', nombre: 'Aymeric Laporte' , imagen:'/esp/3.png', stock: 3},
          { id: 'ESP 5', nombre: 'Dean Huijsen' , imagen:'/esp/4.png', stock: 0},
          { id: 'ESP 6', nombre: 'Pedro Porro' , imagen:'/esp/5.png', stock: 0},
          { id: 'ESP 7', nombre: 'Dani Carvajal' , imagen:'/esp/6.png', stock: 1},
          { id: 'ESP 8', nombre: 'Marc Cucurella' , imagen:'/esp/7.png', stock: 4},
          { id: 'ESP 9', nombre: 'Martín Zubimendi' , imagen:'/esp/8.png', stock: 0},
          { id: 'ESP 10', nombre: 'Rodri' , imagen:'/esp/9.png', stock: 0},
          { id: 'ESP 11', nombre: 'Pedri' , imagen:'/esp/10.png', stock: 0},
          { id: 'ESP 12', nombre: 'Fabián Ruiz' , imagen:'/esp/11.png', stock: 0},
          { id: 'ESP 14', nombre: 'Mikel Merino' , imagen:'/esp/12.png', stock: 0},
          { id: 'ESP 15', nombre: 'Lamine Yamal' , imagen:'/esp/13.png', stock: 0},
          { id: 'ESP 16', nombre: 'Dani Olmo' , imagen:'/esp/14.png', stock: 0},
          { id: 'ESP 17', nombre: 'Nico Williams' , imagen:'/esp/15.png', stock: 0},
          { id: 'ESP 18', nombre: 'Ferran Torres' , imagen:'/esp/16.png', stock: 0},
          { id: 'ESP 19', nombre: 'Álvaro Morata' , imagen:'/esp/17.png', stock: 0},
          { id: 'ESP 20', nombre: 'Mikel Oyarzabal' , imagen:'/esp/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇨🇻 Cabo Verde',
        jugadores: [
          { id: 'CPV 2', nombre: 'Vozinha' , imagen:'/cpv/1.png', stock: 0},
          { id: 'CPV 3', nombre: 'Logan Costa' , imagen:'/cpv/2.png', stock: 1},
          { id: 'CPV 4', nombre: 'Pico' , imagen:'/cpv/3.png', stock: 1},
          { id: 'CPV 5', nombre: 'Diney' , imagen:'/cpv/4.png', stock: 1},
          { id: 'CPV 6', nombre: 'Steven Moreira' , imagen:'/cpv/5.png', stock: 2},
          { id: 'CPV 7', nombre: 'Wagner Pina' , imagen:'/cpv/6.png', stock: 1},
          { id: 'CPV 8', nombre: 'João Paulo' , imagen:'/cpv/7.png', stock: 1},
          { id: 'CPV 9', nombre: 'Yannick Semedo' , imagen:'/cpv/8.png', stock: 1},
          { id: 'CPV 10', nombre: 'Kevin Pina' , imagen:'/cpv/9.png', stock: 1},
          { id: 'CPV 11', nombre: 'Patrick Andrade' , imagen:'/cpv/10.png', stock: 2},
          { id: 'CPV 12', nombre: 'Jamiro Monteiro' , imagen:'/cpv/11.png', stock: 0},
          { id: 'CPV 14', nombre: 'Deroy Duarte' , imagen:'/cpv/12.png', stock: 0},
          { id: 'CPV 15', nombre: 'Garry Rodrigues' , imagen:'/cpv/13.png', stock: 1},
          { id: 'CPV 16', nombre: 'Jovane Cabral' , imagen:'/cpv/14.png', stock: 2},
          { id: 'CPV 17', nombre: 'Ryan Mendes' , imagen:'/cpv/15.png', stock: 1},
          { id: 'CPV 18', nombre: 'Dailon Livramento' , imagen:'/cpv/16.png', stock: 0},
          { id: 'CPV 19', nombre: 'Willy Semedo' , imagen:'/cpv/17.png', stock: 0},
          { id: 'CPV 20', nombre: 'Bebe' , imagen:'/cpv/18.png', stock: 2},
        ],
      },
      {
        nombre: '🇸🇦 Arabia Saudita',
        jugadores: [
          { id: 'KSA 2', nombre: 'Nawaf Alaqidi' , imagen:'/ksa/1.png', stock: 0},
          { id: 'KSA 3', nombre: 'Abdulrahman Al-Sanbi' , imagen:'/ksa/2.png', stock: 0},
          { id: 'KSA 4', nombre: 'Saud Abdulhamid' , imagen:'/ksa/3.png', stock: 1},
          { id: 'KSA 5', nombre: 'Nawaf Bouwashl' , imagen:'/ksa/4.png', stock: 1},
          { id: 'KSA 6', nombre: 'Jihad Thakri' , imagen:'/ksa/5.png', stock: 0},
          { id: 'KSA 7', nombre: 'Moteb Al-Harbi' , imagen:'/ksa/6.png', stock: 1},
          { id: 'KSA 8', nombre: 'Hassan Altambakti' , imagen:'/ksa/7.png', stock: 1},
          { id: 'KSA 9', nombre: 'Musab Aljuwayr' , imagen:'/ksa/8.png', stock: 0},
          { id: 'KSA 10', nombre: 'Ziyad Aljohani' , imagen:'/ksa/9.png', stock: 0},
          { id: 'KSA 11', nombre: 'Abdullah Alkhaibari' , imagen:'/ksa/10.png', stock: 1},
          { id: 'KSA 12', nombre: 'Nasser Aldawsari' , imagen:'/ksa/11.png', stock: 1},
          { id: 'KSA 14', nombre: 'Saleh Abu Alshamat' , imagen:'/ksa/12.png', stock: 1},
          { id: 'KSA 15', nombre: 'Marwan Alsahafi' , imagen:'/ksa/13.png', stock: 0},
          { id: 'KSA 16', nombre: 'Salem Al-Dawsari' , imagen:'/ksa/14.png', stock: 0},
          { id: 'KSA 17', nombre: 'Abdulrahman Al-Aboud' , imagen:'/ksa/15.png', stock: 0},
          { id: 'KSA 18', nombre: 'Feras Albrikan' , imagen:'/ksa/16.png', stock: 0},
          { id: 'KSA 19', nombre: 'Saleh Al-Shehri' , imagen:'/ksa/17.png', stock: 0},
          { id: 'KSA 20', nombre: 'Abdullah Al-Hamdan' , imagen:'/ksa/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇺🇾 Uruguay',
        jugadores: [
          { id: 'URU 2', nombre: 'Sergio Rochet' , imagen:'/uru/1.png', stock: 0},
          { id: 'URU 3', nombre: 'Santiago Mele' , imagen:'/uru/2.png', stock: 1},
          { id: 'URU 4', nombre: 'Ronald Araújo' , imagen:'/uru/3.png', stock: 0},
          { id: 'URU 5', nombre: 'José María Giménez' , imagen:'/uru/4.png', stock: 0},
          { id: 'URU 6', nombre: 'Sebastián Cáceres' , imagen:'/uru/5.png', stock: 2},
          { id: 'URU 7', nombre: 'Mathías Olivera' , imagen:'/uru/6.png', stock: 1},
          { id: 'URU 8', nombre: 'Guillermo Varela' , imagen:'/uru/7.png', stock: 0},
          { id: 'URU 9', nombre: 'Nahitan Nández' , imagen:'/uru/8.png', stock: 0},
          { id: 'URU 10', nombre: 'Federico Valverde' , imagen:'/uru/9.png', stock: 0},
          { id: 'URU 11', nombre: 'Giorgian de Arrascaeta' , imagen:'/uru/10.png', stock: 0},
          { id: 'URU 12', nombre: 'Rodrigo Bentancur' , imagen:'/uru/11.png', stock: 1},
          { id: 'URU 14', nombre: 'Manuel Ugarte' , imagen:'/uru/12.png', stock: 0},
          { id: 'URU 15', nombre: 'Nicolás de la Cruz' , imagen:'/uru/13.png', stock: 0},
          { id: 'URU 16', nombre: 'Maxi Araújo' , imagen:'/uru/14.png', stock: 2},
          { id: 'URU 17', nombre: 'Darwin Núñez' , imagen:'/uru/15.png', stock: 1},
          { id: 'URU 18', nombre: 'Federico Viñas' , imagen:'/uru/16.png', stock: 1},
          { id: 'URU 19', nombre: 'Rodrigo Aguirre' , imagen:'/uru/17.png', stock: 0},
          { id: 'URU 20', nombre: 'Facundo Pellistri' , imagen:'/uru/18.png', stock: 2},
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
          { id: 'FRA 2', nombre: 'Mike Maignan' , imagen:'/fra/1.png', stock: 1},
          { id: 'FRA 3', nombre: 'Theo Hernandez' , imagen:'/fra/2.png', stock: 1},
          { id: 'FRA 4', nombre: 'William Saliba' , imagen:'/fra/3.png', stock: 0},
          { id: 'FRA 5', nombre: 'Jules Koundé' , imagen:'/fra/4.png', stock: 0},
          { id: 'FRA 6', nombre: 'Ibrahima Konaté', imagen:'/fra/5.png' , stock: 0},
          { id: 'FRA 7', nombre: 'Dayot Upamecano' , imagen:'/fra/6.png', stock: 2},
          { id: 'FRA 8', nombre: 'Lucas Digne' , imagen:'/fra/7.png', stock: 0},
          { id: 'FRA 9', nombre: 'Aurélien Tchouaméni' , imagen:'/fra/8.png', stock: 0},
          { id: 'FRA 10', nombre: 'Eduardo Camavinga' , imagen:'/fra/9.png', stock: 0},
          { id: 'FRA 11', nombre: 'Manu Koné' , imagen:'/fra/10.png', stock: 1},
          { id: 'FRA 12', nombre: 'Adrien Rabiot' , imagen:'/fra/11.png', stock: 0},
          { id: 'FRA 14', nombre: 'Michael Olise' , imagen:'/fra/12.png', stock: 0},
          { id: 'FRA 15', nombre: 'Ousmane Dembélé' , imagen:'/fra/13.png', stock: 0},
          { id: 'FRA 16', nombre: 'Bradley Barcola' , imagen:'/fra/14.png', stock: 0},
          { id: 'FRA 17', nombre: 'Désiré Doué' , imagen:'/fra/15.png', stock: 0},
          { id: 'FRA 18', nombre: 'Kingsley Coman' , imagen:'/fra/16.png', stock: 0},
          { id: 'FRA 19', nombre: 'Hugo Ekitiké' , imagen:'/fra/17.png', stock: 0},
          { id: 'FRA 20', nombre: 'Kylian Mbappé' , imagen:'/fra/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇸🇳 Senegal',
        jugadores: [
          { id: 'SEN 2', nombre: 'Edouard Mendy' , imagen:'/sen/1.png', stock: 2},
          { id: 'SEN 3', nombre: 'Yehvann Diouf' , imagen:'/sen/2.png', stock: 2},
          { id: 'SEN 4', nombre: 'Moussa Niakhaté' , imagen:'/sen/3.png', stock: 0},
          { id: 'SEN 5', nombre: 'Abdoulaye Seck' , imagen:'/sen/4.png', stock: 0},
          { id: 'SEN 6', nombre: 'Ismaïl Jakobs' , imagen:'/sen/5.png', stock: 3},
          { id: 'SEN 7', nombre: 'El Hadji Malick Diouf' , imagen:'/sen/6.png', stock: 2},
          { id: 'SEN 8', nombre: 'Kalidou Koulibaly' , imagen:'/sen/7.png', stock: 1},
          { id: 'SEN 9', nombre: 'Idrissa Gana Gueye', imagen:'/sen/8.png' , stock: 1},
          { id: 'SEN 10', nombre: 'Pape Matar Sarr' , imagen:'/sen/9.png', stock: 1},
          { id: 'SEN 11', nombre: 'Pape Gueye' , imagen:'/sen/10.png', stock: 3},
          { id: 'SEN 12', nombre: 'Habib Diarra' , imagen:'/sen/11.png', stock: 1},
          { id: 'SEN 14', nombre: 'Lamine Camara' , imagen:'/sen/12.png', stock: 1},
          { id: 'SEN 15', nombre: 'Sadio Mané' , imagen:'/sen/13.png', stock: 1},
          { id: 'SEN 16', nombre: 'Ismaïla Sarr' , imagen:'/sen/14.png', stock: 1},
          { id: 'SEN 17', nombre: 'Boulaye Dia' , imagen:'/sen/15.png', stock: 1},
          { id: 'SEN 18', nombre: 'Iliman Ndiaye' , imagen:'/sen/16.png', stock: 2},
          { id: 'SEN 19', nombre: 'Nicolas Jackson' , imagen:'/sen/17.png', stock: 2},
          { id: 'SEN 20', nombre: 'Krépin Diatta' , imagen:'/sen/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇮🇶 Irak',
        jugadores: [
          { id: 'IRQ 2', nombre: 'Jalal Hassan' , imagen:'/irq/1.png', stock: 1},
          { id: 'IRQ 3', nombre: 'Rebin Sulaka' , imagen:'/irq/2.png', stock: 1},
          { id: 'IRQ 4', nombre: 'Hussein Ali' , imagen:'/irq/3.png', stock: 1},
          { id: 'IRQ 5', nombre: 'Akam Hashem' , imagen:'/irq/4.png', stock: 0},
          { id: 'IRQ 6', nombre: 'Merchas Doski' , imagen:'/irq/5.png', stock: 2},
          { id: 'IRQ 7', nombre: 'Zaid Tahseen' , imagen:'/irq/6.png', stock: 0},
          { id: 'IRQ 8', nombre: 'Manaf Younis' , imagen:'/irq/7.png', stock: 2},
          { id: 'IRQ 9', nombre: 'Zidane Iqbal' , imagen:'/irq/8.png', stock: 0},
          { id: 'IRQ 10', nombre: 'Amir Al-Ammari' , imagen:'/irq/9.png', stock: 0},
          { id: 'IRQ 11', nombre: 'Ibrahim Bayesh' , imagen:'/irq/10.png', stock: 0},
          { id: 'IRQ 12', nombre: 'Ali Jasim' , imagen:'/irq/11.png', stock: 0},
          { id: 'IRQ 14', nombre: 'Youssef Amyn' , imagen:'/irq/12.png', stock: 0},
          { id: 'IRQ 15', nombre: 'Aimar Sher' , imagen:'/irq/13.png', stock: 0},
          { id: 'IRQ 16', nombre: 'Marko Farji' , imagen:'/irq/14.png', stock: 0},
          { id: 'IRQ 17', nombre: 'Osama Rashid' , imagen:'/irq/15.png', stock: 0},
          { id: 'IRQ 18', nombre: 'Ali Al-Hamadi' , imagen:'/irq/16.png', stock: 0},
          { id: 'IRQ 19', nombre: 'Aymen Hussein' , imagen:'/irq/17.png', stock: 1},
          { id: 'IRQ 20', nombre: 'Mohanad Ali' , imagen:'/irq/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇳🇴 Noruega',
        jugadores: [
          { id: 'NOR 2', nombre: 'Ørjan Nyland' , imagen:'/nor/1.png', stock: 0},
          { id: 'NOR 3', nombre: 'Julian Ryerson' , imagen:'/nor/2.png', stock: 1},
          { id: 'NOR 4', nombre: 'Leo Østigård' , imagen:'/nor/3.png', stock: 4},
          { id: 'NOR 5', nombre: 'Kristoffer Vassbakk Ajer' , imagen:'/nor/4.png', stock: 2},
          { id: 'NOR 6', nombre: 'Marcus Holmgren Pedersen' , imagen:'/nor/5.png', stock: 1},
          { id: 'NOR 7', nombre: 'David Møller Wolfe' , imagen:'/nor/6.png', stock: 1},
          { id: 'NOR 8', nombre: 'Torbjørn Heggem' , imagen:'/nor/7.png', stock: 4},
          { id: 'NOR 9', nombre: 'Morten Thorsby' , imagen:'/nor/8.png', stock: 3},
          { id: 'NOR 10', nombre: 'Martin Ødegaard' , imagen:'/nor/9.png', stock: 0},
          { id: 'NOR 11', nombre: 'Sander Berge' , imagen:'/nor/10.png', stock: 0},
          { id: 'NOR 12', nombre: 'Andreas Schjelderup' , imagen:'/nor/11.png', stock: 3},
          { id: 'NOR 14', nombre: 'Patrick Berg' , imagen:'/nor/12.png', stock: 3},
          { id: 'NOR 15', nombre: 'Erling Haaland' , imagen:'/nor/13.png', stock: 0},
          { id: 'NOR 16', nombre: 'Alexander Sørloth', imagen:'/nor/14.png' , stock: 0},
          { id: 'NOR 17', nombre: 'Aron Dønnum', imagen:'/nor/15.png' , stock: 4},
          { id: 'NOR 18', nombre: 'Jørgen Strand Larsen' , imagen:'/nor/16.png', stock: 2},
          { id: 'NOR 19', nombre: 'Antonio Nusa' , imagen:'/nor/17.png', stock: 0},
          { id: 'NOR 20', nombre: 'Oscar Bobb' , imagen:'/nor/18.png', stock: 0},
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
          { id: 'ARG 2', nombre: 'Emiliano Martínez' , imagen:'/arg/emilianomartinez.png', stock: 0 },
          { id: 'ARG 3', nombre: 'Nahuel Molina', imagen:'/arg/nahuel molinaalvarez.png' , stock: 1},
          { id: 'ARG 4', nombre: 'Cristian Romero', imagen:'/arg/cristian romero.png', stock: 0},
          { id: 'ARG 5', nombre: 'Nicolás Otamendi', imagen:'/arg/nicolas otomendi.png' , stock: 0},
          { id: 'ARG 6', nombre: 'Nicolás Tagliafico' , imagen:'/arg/nicolas tagliafico.png', stock: 0},
          { id: 'ARG 7', nombre: 'Leonardo Balerdi' , imagen:'/arg/leonardo balerdigongález.png', stock: 0},
          { id: 'ARG 8', nombre: 'Enzo Fernández' , imagen:'/arg/enzo fernandez.png' , stock: 0},
          { id: 'ARG 9', nombre: 'Alexis Mac Allister' ,imagen:'/arg/alexis mac allister.png', stock: 0 },
          { id: 'ARG 10', nombre: 'Rodrigo De Paul' , imagen:'/arg/rodrigo de paul.png', stock: 0},
          { id: 'ARG 11', nombre: 'Exequiel Palacios' ,imagen:'/arg/exequiel palacios.png' , stock: 0},
          { id: 'ARG 12', nombre: 'Leandro Paredes' ,imagen:'/arg/leandro paredes.png', stock: 0},
          { id: 'ARG 14', nombre: 'Nico Paz' ,imagen:'/arg/nico paz.png', stock: 0},
          { id: 'ARG 15', nombre: 'Franco Mastantuono' ,imagen:'/arg/franco mastantuono.png', stock: 0},
          { id: 'ARG 16', nombre: 'Nico González' ,imagen:'/arg/nico gongález.png', stock: 0},
          { id: 'ARG 17', nombre: 'Lionel Messi',imagen:'/arg/lionel messi.png' , stock: 0},
          { id: 'ARG 18', nombre: 'Lautaro Martínez',imagen:'/arg/lautaro martinez.png' , stock: 0},
          { id: 'ARG 19', nombre: 'Julián Álvarez',imagen:'/arg/julian alvarez.png' , stock: 0},
          { id: 'ARG 20', nombre: 'Giuliano Simeone',imagen:'/arg/giuliano simeone.png' , stock: 1},
        ],
      },
      {
        nombre: '🇩🇿 Argelia',
        jugadores: [
          { id: 'ALG 2', nombre: 'Alexis Guendouz' , imagen:'/alg/1.png', stock: 1},
          { id: 'ALG 3', nombre: 'Ramy Bensebaini' , imagen:'/alg/2.png', stock: 0},
          { id: 'ALG 4', nombre: 'Youcef Atal' , imagen:'/alg/3.png', stock: 2},
          { id: 'ALG 5', nombre: 'Rayan Aït-Nouri' , imagen:'/alg/4.png', stock: 0},
          { id: 'ALG 6', nombre: 'Mohamed Amine Tougai' , imagen:'/alg/5.png', stock: 1},
          { id: 'ALG 7', nombre: 'Aïssa Mandi' , imagen:'/alg/6.png', stock: 0},
          { id: 'ALG 8', nombre: 'Ismaël Bennacer' , imagen:'/alg/7.png', stock: 4},
          { id: 'ALG 9', nombre: 'Houssem Aouar' , imagen:'/alg/8.png', stock: 0},
          { id: 'ALG 10', nombre: 'Hicham Boudaoui' , imagen:'/alg/9.png', stock: 2},
          { id: 'ALG 11', nombre: 'Ramiz Zerrouki' , imagen:'/alg/10.png', stock: 0},
          { id: 'ALG 12', nombre: 'Nabil Bentaleb' , imagen:'/alg/11.png', stock: 3},
          { id: 'ALG 14', nombre: 'Farès Chaïbi' , imagen:'/alg/12.png', stock: 0},
          { id: 'ALG 15', nombre: 'Riyad Mahrez' , imagen:'/alg/13.png', stock: 0},
          { id: 'ALG 16', nombre: 'Saïd Benrahma' , imagen:'/alg/14.png', stock: 0},
          { id: 'ALG 17', nombre: 'Anis Hadj Moussa' , imagen:'/alg/15.png', stock: 2},
          { id: 'ALG 18', nombre: 'Amine Gouiri' , imagen:'/alg/16.png', stock: 0},
          { id: 'ALG 19', nombre: 'Baghdad Bounedjah' , imagen:'/alg/17.png', stock: 0},
          { id: 'ALG 20', nombre: 'Mohammed Amoura' , imagen:'/alg/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇦🇹 Austria',
        jugadores: [
          { id: 'AUT 2', nombre: 'Alexander Schlager' , imagen:'/aut/1.png', stock: 0},
          { id: 'AUT 3', nombre: 'Patrick Pentz' , imagen:'/aut/2.png', stock: 1},
          { id: 'AUT 4', nombre: 'David Alaba' , imagen:'/aut/3.png', stock: 0},
          { id: 'AUT 5', nombre: 'Kevin Danso' , imagen:'/aut/4.png', stock: 0},
          { id: 'AUT 6', nombre: 'Philipp Lienhart' , imagen:'/aut/5.png', stock: 0},
          { id: 'AUT 7', nombre: 'Stefan Posch' , imagen:'/aut/6.png', stock: 0},
          { id: 'AUT 8', nombre: 'Phillipp Mwene' , imagen:'/aut/7.png', stock: 2},
          { id: 'AUT 9', nombre: 'Alexander Prass' , imagen:'/aut/8.png', stock: 0},
          { id: 'AUT 10', nombre: 'Xaver Schlager' , imagen:'/aut/9.png', stock: 2},
          { id: 'AUT 11', nombre: 'Marcel Sabitzer' , imagen:'/aut/10.png', stock: 1},
          { id: 'AUT 12', nombre: 'Konrad Laimer' , imagen:'/aut/11.png', stock: 0},
          { id: 'AUT 14', nombre: 'Florian Grillitsch' , imagen:'/aut/12.png', stock: 0},
          { id: 'AUT 15', nombre: 'Nicolas Seiwald' , imagen:'/aut/13.png', stock: 2},
          { id: 'AUT 16', nombre: 'Romano Schmid' , imagen:'/aut/14.png', stock: 1},
          { id: 'AUT 17', nombre: 'Patrick Wimmer' , imagen:'/aut/15.png', stock: 1},
          { id: 'AUT 18', nombre: 'Christoph Baumgartner' , imagen:'/aut/16.png', stock: 1},
          { id: 'AUT 19', nombre: 'Michael Gregoritsch' , imagen:'/aut/17.png', stock: 0},
          { id: 'AUT 20', nombre: 'Marko Arnautović' , imagen:'/aut/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇯🇴 Jordania',
        jugadores: [
          { id: 'JOR 2', nombre: 'Yazeed Abulaila', imagen:'/jor/1.png' , stock: 1},
          { id: 'JOR 3', nombre: 'Ihsan Haddad' , imagen:'/jor/2.png', stock: 0},
          { id: 'JOR 4', nombre: 'Mohammad Abu Hashish' , imagen:'/jor/3.png', stock: 1},
          { id: 'JOR 5', nombre: 'Yazan Al-Arab' , imagen:'/jor/4.png', stock: 0},
          { id: 'JOR 6', nombre: 'Abdallah Nasib' , imagen:'/jor/5.png', stock: 1},
          { id: 'JOR 7', nombre: 'Saleem Obaid' , imagen:'/jor/6.png', stock: 1},
          { id: 'JOR 8', nombre: 'Mohammad Abualnadi' , imagen:'/jor/7.png', stock: 1},
          { id: 'JOR 9', nombre: 'Ibrahim Saadeh' , imagen:'/jor/8.png', stock: 0},
          { id: 'JOR 10', nombre: 'Nizar Al-Rashdan' , imagen:'/jor/9.png', stock: 1},
          { id: 'JOR 11', nombre: 'Noor Al-Rawabdeh' , imagen:'/jor/10.png', stock: 0},
          { id: 'JOR 12', nombre: 'Mohannad Abu Taha' , imagen:'/jor/11.png', stock: 0},
          { id: 'JOR 14', nombre: 'Amer Jamous' , imagen:'/jor/12.png', stock: 0},
          { id: 'JOR 15', nombre: 'Musa Al-Taamari' , imagen:'/jor/13.png', stock: 0},
          { id: 'JOR 16', nombre: 'Yazan Al-Naimat' , imagen:'/jor/14.png', stock: 0},
          { id: 'JOR 17', nombre: 'Mahmoud Al-Mardi' , imagen:'/jor/15.png', stock: 0},
          { id: 'JOR 18', nombre: 'Ali Olwan' , imagen:'/jor/16.png', stock: 0},
          { id: 'JOR 19', nombre: 'Mohammad Abu Zrayq' , imagen:'/jor/17.png', stock: 1},
          { id: 'JOR 20', nombre: 'Ibrahim Sabra' , imagen:'/jor/18.png', stock: 0},
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
          { id: 'POR 2', nombre: 'Diogo Costa' , imagen:'/por/1.png', stock: 2},
          { id: 'POR 3', nombre: 'José Sá' , imagen:'/por/2.png', stock: 2},
          { id: 'POR 4', nombre: 'Rúben Dias' , imagen:'/por/3.png', stock: 0},
          { id: 'POR 5', nombre: 'João Cancelo' , imagen:'/por/4.png', stock: 0},
          { id: 'POR 6', nombre: 'Diogo Dalot' , imagen:'/por/5.png', stock: 1},
          { id: 'POR 7', nombre: 'Nuno Mendes' , imagen:'/por/6.png', stock: 0},
          { id: 'POR 8', nombre: 'Gonçalo Inácio' , imagen:'/por/7.png', stock: 1},
          { id: 'POR 9', nombre: 'Bernardo Silva' , imagen:'/por/8.png', stock: 2},
          { id: 'POR 10', nombre: 'Bruno Fernandes' , imagen:'/por/9.png', stock: 0},
          { id: 'POR 11', nombre: 'Rúben Neves' , imagen:'/por/10.png', stock: 1},
          { id: 'POR 12', nombre: 'Vitinha' , imagen:'/por/11.png', stock: 0},
          { id: 'POR 14', nombre: 'João Neves' , imagen:'/por/12.png', stock: 2},
          { id: 'POR 15', nombre: 'Cristiano Ronaldo' , imagen:'/por/13.png', stock: 0},
          { id: 'POR 16', nombre: 'Francisco Trincão' , imagen:'/por/14.png', stock: 0},
          { id: 'POR 17', nombre: 'João Félix' , imagen:'/por/15.png', stock: 1},
          { id: 'POR 18', nombre: 'Gonçalo Ramos' , imagen:'/por/16.png', stock: 0},
          { id: 'POR 19', nombre: 'Pedro Neto' , imagen:'/por/17.png', stock: 1},
          { id: 'POR 20', nombre: 'Rafael Leão' , imagen:'/por/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇩 RD Congo',
        jugadores: [
          { id: 'COD 2', nombre: 'Lionel Mpasi' , imagen:'/cod/1.png', stock: 0},
          { id: 'COD 3', nombre: 'Aaron Wan-Bissaka' , imagen:'/cod/2.png', stock: 0},
          { id: 'COD 4', nombre: 'Axel Tuanzebe' , imagen:'/cod/3.png', stock: 0},
          { id: 'COD 5', nombre: 'Arthur Masuaku' , imagen:'/cod/4.png', stock: 0},
          { id: 'COD 6', nombre: 'Chancel Mbemba' , imagen:'/cod/5.png', stock: 2},
          { id: 'COD 7', nombre: 'Joris Kayembe' , imagen:'/cod/6.png', stock: 2},
          { id: 'COD 8', nombre: 'Charles Pickel' , imagen:'/cod/7.png', stock: 2},
          { id: 'COD 9', nombre: "Ngal'ayel Mukau" , imagen:'/cod/8.png', stock: 0},
          { id: 'COD 10', nombre: 'Edo Kayembe' , imagen:'/cod/9.png', stock: 2},
          { id: 'COD 11', nombre: 'Samuel Moutoussamy' , imagen:'/cod/10.png', stock: 2},
          { id: 'COD 12', nombre: 'Noah Sadiki' , imagen:'/cod/11.png', stock: 2},
          { id: 'COD 14', nombre: 'Théo Bongonda' , imagen:'/cod/12.png', stock: 0},
          { id: 'COD 15', nombre: 'Meschak Elia' , imagen:'/cod/13.png', stock: 2},
          { id: 'COD 16', nombre: 'Yoane Wissa' , imagen:'/cod/14.png', stock: 1},
          { id: 'COD 17', nombre: 'Brian Cipenga' , imagen:'/cod/15.png', stock: 2},
          { id: 'COD 18', nombre: 'Fiston Mayele' , imagen:'/cod/16.png', stock: 2},
          { id: 'COD 19', nombre: 'Cédric Bakambu' , imagen:'/cod/17.png', stock: 1},
          { id: 'COD 20', nombre: 'Nathanaël Mbuku' , imagen:'/cod/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇺🇿 Uzbekistán',
        jugadores: [
          { id: 'UZB 2', nombre: 'Utkir Yusupov', imagen:'/uzb/1.png' , stock: 3},
          { id: 'UZB 3', nombre: 'Farrukh Savfiev' , imagen:'/uzb/2.png', stock: 1},
          { id: 'UZB 4', nombre: 'Sherzod Nasrullaev' , imagen:'/uzb/3.png', stock: 2},
          { id: 'UZB 5', nombre: 'Umar Eshmurodov' , imagen:'/uzb/4.png', stock: 3},
          { id: 'UZB 6', nombre: 'Husniddin Aliqulov' , imagen:'/uzb/5.png', stock: 1},
          { id: 'UZB 7', nombre: 'Rustamjon Ashurmatov' , imagen:'/uzb/6.png', stock: 0},
          { id: 'UZB 8', nombre: 'Khojiakbar Alijonov' , imagen:'/uzb/7.png', stock: 2},
          { id: 'UZB 9', nombre: 'Abdukodir Khusanov' , imagen:'/uzb/8.png', stock: 0},
          { id: 'UZB 10', nombre: 'Odiljon Hamrobekov' , imagen:'/uzb/9.png', stock: 2},
          { id: 'UZB 11', nombre: 'Otabek Shukurov' , imagen:'/uzb/10.png', stock: 1},
          { id: 'UZB 12', nombre: 'Jamshid Iskanderov' , imagen:'/uzb/11.png', stock: 2},
          { id: 'UZB 14', nombre: 'Azizbek Turgunboev' , imagen:'/uzb/12.png', stock: 0},
          { id: 'UZB 15', nombre: 'Khojimat Erkinov' , imagen:'/uzb/13.png', stock: 1},
          { id: 'UZB 16', nombre: 'Eldor Shomurodov' , imagen:'/uzb/14.png', stock: 2},
          { id: 'UZB 17', nombre: 'Oston Urunov' , imagen:'/uzb/15.png', stock: 1},
          { id: 'UZB 18', nombre: 'Jaloliddin Masharipov' , imagen:'/uzb/16.png', stock: 0},
          { id: 'UZB 19', nombre: 'Igor Sergeev' , imagen:'/uzb/17.png', stock: 1},
          { id: 'UZB 20', nombre: 'Abbosbek Fayzullaev' , imagen:'/uzb/18.png', stock: 1},
        ],
      },
      {
        nombre: '🇨🇴 Colombia',
        jugadores: [
          { id: 'COL 2', nombre: 'Camilo Vargas' , imagen:'/col/1.png', stock: 2},
          { id: 'COL 3', nombre: 'David Ospina' , imagen:'/col/2.png', stock: 1},
          { id: 'COL 4', nombre: 'Dávinson Sánchez' , imagen:'/col/3.png', stock: 1},
          { id: 'COL 5', nombre: 'Yerry Mina' , imagen:'/col/4.png', stock: 0},
          { id: 'COL 6', nombre: 'Daniel Muñoz' , imagen:'/col/5.png', stock: 2},
          { id: 'COL 7', nombre: 'Johan Mojica' , imagen:'/col/6.png', stock: 2},
          { id: 'COL 8', nombre: 'Jhon Lucumí' , imagen:'/col/7.png', stock: 1},
          { id: 'COL 9', nombre: 'Santiago Arias' , imagen:'/col/8.png', stock: 0},
          { id: 'COL 10', nombre: 'Jefferson Lerma' , imagen:'/col/9.png', stock: 0},
          { id: 'COL 11', nombre: 'Kevin Castaño' , imagen:'/col/10.png', stock: 1},
          { id: 'COL 12', nombre: 'Richard Ríos' , imagen:'/col/11.png', stock: 1},
          { id: 'COL 14', nombre: 'James Rodríguez' , imagen:'/col/12.png', stock: 0},
          { id: 'COL 15', nombre: 'Juan Fernando Quintero' , imagen:'/col/13.png', stock: 1},
          { id: 'COL 16', nombre: 'Jorge Carrascal' , imagen:'/col/14.png', stock: 0},
          { id: 'COL 17', nombre: 'Jhon Arias' , imagen:'/col/15.png', stock: 0},
          { id: 'COL 18', nombre: 'Jhon Córdoba' , imagen:'/col/16.png', stock: 0},
          { id: 'COL 19', nombre: 'Luis Suárez' , imagen:'/col/17.png', stock: 2},
          { id: 'COL 20', nombre: 'Luis Díaz' , imagen:'/col/18.png', stock: 2},
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
          { id: 'ENG 2', nombre: 'Jordan Pickford' , imagen:'/eng/1.png', stock: 1},
          { id: 'ENG 3', nombre: 'John Stones' , imagen:'/eng/2.png', stock: 0},
          { id: 'ENG 4', nombre: 'Marc Guéhi' , imagen:'/eng/3.png', stock: 0},
          { id: 'ENG 5', nombre: 'Ezri Konsa' , imagen:'/eng/4.png', stock: 0},
          { id: 'ENG 6', nombre: 'Trent Alexander-Arnold' , imagen:'/eng/5.png', stock: 0},
          { id: 'ENG 7', nombre: 'Reece James' , imagen:'/eng/6.png', stock: 0},
          { id: 'ENG 8', nombre: 'Dan Burn' , imagen:'/eng/7.png', stock: 0},
          { id: 'ENG 9', nombre: 'Jordan Henderson' , imagen:'/eng/8.png', stock: 1},
          { id: 'ENG 10', nombre: 'Declan Rice' , imagen:'/eng/9.png', stock: 0},
          { id: 'ENG 11', nombre: 'Jude Bellingham' , imagen:'/eng/10.png', stock: 0},
          { id: 'ENG 12', nombre: 'Cole Palmer' , imagen:'/eng/11.png', stock: 0},
          { id: 'ENG 14', nombre: 'Morgan Rogers' , imagen:'/eng/12.png', stock: 0},
          { id: 'ENG 15', nombre: 'Anthony Gordon' , imagen:'/eng/13.png', stock: 0},
          { id: 'ENG 16', nombre: 'Phil Foden' , imagen:'/eng/14.png', stock: 0},
          { id: 'ENG 17', nombre: 'Bukayo Saka' , imagen:'/eng/15.png', stock: 0},
          { id: 'ENG 18', nombre: 'Harry Kane' , imagen:'/eng/16.png', stock: 0},
          { id: 'ENG 19', nombre: 'Marcus Rashford' , imagen:'/eng/17.png', stock: 0},
          { id: 'ENG 20', nombre: 'Ollie Watkins' , imagen:'/eng/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇭🇷 Croacia',
        jugadores: [
          { id: 'CRO 2', nombre: 'Dominik Livaković' , imagen:'/cro/1.png', stock: 2},
          { id: 'CRO 3', nombre: 'Duje Ćaleta-Car' , imagen:'/cro/2.png', stock: 0},
          { id: 'CRO 4', nombre: 'Joško Gvardiol' , imagen:'/cro/3.png', stock: 2},
          { id: 'CRO 5', nombre: 'Josip Stanišić' , imagen:'/cro/4.png', stock: 2},
          { id: 'CRO 6', nombre: 'Luka Vušković' , imagen:'/cro/5.png', stock: 1},
          { id: 'CRO 7', nombre: 'Josip Šutalo' , imagen:'/cro/6.png', stock: 0},
          { id: 'CRO 8', nombre: 'Kristijan Jakić' , imagen:'/cro/7.png', stock: 0},
          { id: 'CRO 9', nombre: 'Luka Modrić' , imagen:'/cro/8.png', stock: 1},
          { id: 'CRO 10', nombre: 'Mateo Kovačić' , imagen:'/cro/9.png', stock: 0},
          { id: 'CRO 11', nombre: 'Martin Baturina' , imagen:'/cro/10.png', stock: 0},
          { id: 'CRO 12', nombre: 'Lovro Majer' , imagen:'/cro/11.png', stock: 0},
          { id: 'CRO 14', nombre: 'Mario Pašalić' , imagen:'/cro/12.png', stock: 2},
          { id: 'CRO 15', nombre: 'Petar Sučić' , imagen:'/cro/13.png', stock: 2},
          { id: 'CRO 16', nombre: 'Ivan Perišić' , imagen:'/cro/14.png', stock: 0},
          { id: 'CRO 17', nombre: 'Marco Pašalić' , imagen:'/cro/15.png', stock: 2},
          { id: 'CRO 18', nombre: 'Ante Budimir' , imagen:'/cro/16.png', stock: 0},
          { id: 'CRO 19', nombre: 'Andrej Kramarić' , imagen:'/cro/17.png', stock: 2},
          { id: 'CRO 20', nombre: 'Franjo Ivanović' , imagen:'/cro/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇬🇭 Ghana',
        jugadores: [
          { id: 'GHA 2', nombre: 'Lawrence Ati Zigi' , imagen:'/gha/1.png', stock: 0},
          { id: 'GHA 3', nombre: 'Tariq Lamptey' , imagen:'/gha/2.png', stock: 0},
          { id: 'GHA 4', nombre: 'Mohammed Salisu' , imagen:'/gha/3.png', stock: 1},
          { id: 'GHA 5', nombre: 'Alidu Seidu' , imagen:'/gha/4.png', stock: 2},
          { id: 'GHA 6', nombre: 'Alexander Djiku' , imagen:'/gha/5.png', stock: 0},
          { id: 'GHA 7', nombre: 'Gideon Mensah' , imagen:'/gha/6.png', stock: 0},
          { id: 'GHA 8', nombre: 'Caleb Yirenkyi' , imagen:'/gha/7.png', stock: 0},
          { id: 'GHA 9', nombre: 'Abdul Issahaku Fatawu' , imagen:'/gha/8.png', stock: 2},
          { id: 'GHA 10', nombre: 'Thomas Partey' , imagen:'/gha/9.png', stock: 0},
          { id: 'GHA 11', nombre: 'Salis Abdul Samed' , imagen:'/gha/10.png', stock: 0},
          { id: 'GHA 12', nombre: 'Kamaldeen Sulemana' , imagen:'/gha/11.png', stock: 2},
          { id: 'GHA 14', nombre: 'Mohammed Kudus' , imagen:'/gha/12.png', stock: 0},
          { id: 'GHA 15', nombre: 'Iñaki Williams' , imagen:'/gha/13.png', stock: 0},
          { id: 'GHA 16', nombre: 'Jordan Ayew' , imagen:'/gha/14.png', stock: 0},
          { id: 'GHA 17', nombre: 'Andrew Ayew' , imagen:'/gha/15.png', stock: 1},
          { id: 'GHA 18', nombre: 'Joseph Paintsil' , imagen:'/gha/16.png', stock: 1},
          { id: 'GHA 19', nombre: 'Osman Bukari' , imagen:'/gha/17.png', stock: 0},
          { id: 'GHA 20', nombre: 'Antoine Semenyo' , imagen:'/gha/18.png', stock: 0},
        ],
      },
      {
        nombre: '🇵🇦 Panamá',
        jugadores: [
          { id: 'PAN 2', nombre: 'Orlando Mosquera' , imagen:'/pan/1.png', stock: 0},
          { id: 'PAN 3', nombre: 'Luis Mejía' , imagen:'/pan/2.png', stock: 0},
          { id: 'PAN 4', nombre: 'Fidel Escobar' , imagen:'/pan/3.png', stock: 0},
          { id: 'PAN 5', nombre: 'Andrés Andrade' , imagen:'/pan/4.png', stock: 0},
          { id: 'PAN 6', nombre: 'Michael Amir Murillo' , imagen:'/pan/5.png', stock: 0},
          { id: 'PAN 7', nombre: 'Éric Davis' , imagen:'/pan/6.png', stock: 1},
          { id: 'PAN 8', nombre: 'José Córdoba' , imagen:'/pan/7.png', stock: 0},
          { id: 'PAN 9', nombre: 'César Blackman' , imagen:'/pan/8.png', stock: 0},
          { id: 'PAN 10', nombre: 'Cristian Martínez' , imagen:'/pan/9.png', stock: 0},
          { id: 'PAN 11', nombre: 'Aníbal Godoy' , imagen:'/pan/10.png', stock: 0},
          { id: 'PAN 12', nombre: 'Adalberto Carrasquilla' , imagen:'/pan/11.png', stock: 0},
          { id: 'PAN 14', nombre: 'Édgar Bárcenas' , imagen:'/pan/12.png', stock: 0},
          { id: 'PAN 15', nombre: 'Carlos Harvey' , imagen:'/pan/13.png', stock: 0},
          { id: 'PAN 16', nombre: 'Ismael Díaz' , imagen:'/pan/14.png', stock: 0},
          { id: 'PAN 17', nombre: 'José Fajardo' , imagen:'/pan/15.png', stock: 1},
          { id: 'PAN 18', nombre: 'Cecilio Waterman' , imagen:'/pan/16.png', stock: 0},
          { id: 'PAN 19', nombre: 'José Luis Rodríguez' , imagen:'/pan/17.png', stock: 0},
          { id: 'PAN 20', nombre: 'Alberto Quintero' , imagen:'/pan/18.png', stock: 0},
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