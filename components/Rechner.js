import React from "react";
import { useState } from 'react';

const Rechner = function Rechner(gewicht, neigung, radsätze, abstellzeitBool) {
    
    let gewichtInt = parseInt(gewicht);
    let abstellzeitLess = abstellzeitBool;
    let neigungInt = parseFloat(neigung.replace(',','.'));
    let radsätzeInt = radsätze;
    let resultKN;
    let resultFestMittle;

    const TabelleKn = {
        "2,5<24": {
            '40': 1,
            '80': 2,
            '100': 3,
            '120': 3,
            '160': 4,
            '200': 5,
            '300': 8,
            '400': 10,
            '600': 15,
            '800': 20,
            '1000': 25,
            '1200': 30,
            '1400': 35,
            '1600': 40,
            '1800': 45,
            '2000': 50,
            '2200': 55,
            '2400': 60,
            '2600': 65,
            '3000': 75,
            '3500': 87,
            '4000': 100,
            '4500': 112,
            '5000': 124,
            '6000': 149,
        },
        "2.5": {
            '40': 2,
            '80': 4,
            '100': 5,
            '120': 6,
            '160': 8,
            '200': 10,
            '300': 15,
            '400': 20,
            '600': 30,
            '800': 40,
            '1000': 50,
            '1200': 60,
            '1400': 70,
            '1600': 80,
            '1800': 90,
            '2000': 100,
            '2200': 109,
            '2400': 119,
            '2600': 129,
            '3000': 149,
            '3500': 174,
            '4000': 199,
            '4500': 223,
            '5000': 248,
            '6000': 298,
        },
        "3": {
            '40': 3,
            '80': 5,
            '100': 6,
            '120': 7,
            '160': 9,
            '200': 11,
            '300': 17,
            '400': 22,
            '600': 33,
            '800': 44,
            '1000': 55,
            '1200': 66,
            '1400': 77,
            '1600': 88,
            '1800': 98,
            '2000': 109,
            '2200': 120,
            '2400': 131,
            '2600': 142,
            '3000': 164,
            '3500': 191,
            '4000': 218,
            '4500': 245,
            '5000': 273,
            '6000': 327,
        },
        "3.5": {
            '40': 3,
            '80': 5,
            '100': 6,
            '120': 8,
            '160': 10,
            '200': 12,
            '300': 18,
            '400': 24,
            '600': 36,
            '800': 48,
            '1000': 60,
            '1200': 72,
            '1400': 84,
            '1600': 95,
            '1800': 107,
            '2000': 119,
            '2200': 131,
            '2400': 143,
            '2600': 155,
            '3000': 179,
            '3500': 208,
            '4000': 238,
            '4500': 268,
            '5000': 297,
            '6000': 357,
        },
        "4": {
            '40': 3,
            '80': 6,
            '100': 7,
            '120': 8,
            '160': 11,
            '200': 13,
            '300': 20,
            '400': 26,
            '600': 39,
            '800': 52,
            '1000': 65,
            '1200': 78,
            '1400': 90,
            '1600': 103,
            '1800': 116,
            '2000': 129,
            '2200': 142,
            '2400': 155,
            '2600': 168,
            '3000': 193,
            '3500': 225,
            '4000': 257,
            '4500': 290,
            '5000': 322,
            '6000': 386,
        },
        "4.5": {
            '40': 3,
            '80': 6,
            '100': 7,
            '120': 9,
            '160': 12,
            '200': 14,
            '300': 21,
            '400': 28,
            '600': 42,
            '800': 56,
            '1000': 70,
            '1200': 83,
            '1400': 97,
            '1600': 111,
            '1800': 125,
            '2000': 139,
            '2200': 153,
            '2400': 166,
            '2600': 180,
            '3000': 208,
            '3500': 243,
            '4000': 277,
            '4500': 312,
            '5000': 346,
            '6000': 415,
        },
        "5": {
            '40': 3,
            '80': 6,
            '100': 8,
            '120': 9,
            '160': 12,
            '200': 15,
            '300': 23,
            '400': 30,
            '600': 45,
            '800': 60,
            '1000': 75,
            '1200': 89,
            '1400': 104,
            '1600': 119,
            '1800': 134,
            '2000': 149,
            '2200': 163,
            '2400': 178,
            '2600': 193,
            '3000': 223,
            '3500': 260,
            '4000': 297,
            '4500': 334,
            '5000': 371,
            '6000': 445,
        },
        "7.5": {
            '40': 5,
            '80': 9,
            '100': 11,
            '120': 13,
            '160': 17,
            '200': 21,
            '300': 31,
            '400': 42,
            '600': 62,
            '800': 83,
            '1000': 104,
            '1200': 124,
            '1400': 145,
            '1600': 165,
            '1800': 186,
            '2000': 207,
            '2200': 227,
            '2400': 248,
            '2600': 268,
            '3000': 310,
            '3500': 361,
            '4000': 413,
            '4500': 464,
            '5000': 516,
            '6000': 619,
        },
        "10": {
            '40': 6,
            '80': 11,
            '100': 14,
            '120': 17,
            '160': 22,
            '200': 28,
            '300': 42,
            '400': 55,
            '600': 83,
            '800': 110,
            '1000': 138,
            '1200': 165,
            '1400': 193,
            '1600': 220,
            '1800': 248,
            '2000': 275,
            '2200': 303,
            '2400': 330,
            '2600': 358,
            '3000': 413,
            '3500': 481,
            '4000': 550,
            '4500': 619,
            '5000': 687,
            '6000': 825,
        },
        "12.5": {
            '40': 7,
            '80': 14,
            '100': 18,
            '120': 21,
            '160': 28,
            '200': 35,
            '300': 52,
            '400': 69,
            '600': 104,
            '800': 138,
            '1000': 172,
            '1200': 207,
            '1400': 241,
            '1600': 275,
            '1800': 310,
            '2000': 344,
            '2200': 378,
            '2400': 413,
            '2600': 447,
            '3000': 516,
            '3500': 601,
            '4000': 687,
            '4500': 773,
            '5000': 859,
            '6000': 1031,
        },
        "15": {
            '40': 9,
            '80': 17,
            '100': 21,
            '120': 25,
            '160': 33,
            '200': 42,
            '300': 62,
            '400': 83,
            '600': 124,
            '800': 165,
            '1000': 207,
            '1200': 248,
            '1400': 289,
            '1600': 330,
            '1800': 371,
            '2000': 413,
            '2200': 454,
            '2400': 495,
            '2600': 536,
            '3000': 619,
            '3500': 722,
            '4000': 825,
            '4500': 928,
            '5000': 1031,
            '6000': 1237,
        },
        "20": {
            '40': 11,
            '80': 22,
            '100': 28,
            '120': 33,
            '160': 44,
            '200': 55,
            '300': 83,
            '400': 110,
            '600': 165,
            '800': 220,
            '1000': 275,
            '1200': 330,
            '1400': 385,
            '1600': 440,
            '1800': 495,
            '2000': 550,
            '2200': 605,
            '2400': 660,
            '2600': 715,
            '3000': 825,
            '3500': 962,
            '4000': 1099,
            '4500': 1237,
            '5000': 1374,
            '6000': 1649,
        },
        "25": {
            '40': 14,
            '80': 28,
            '100': 35,
            '120': 42,
            '160': 55,
            '200': 69,
            '300': 104,
            '400': 138,
            '600': 207,
            '800': 275,
            '1000': 344,
            '1200': 413,
            '1400': 481,
            '1600': 550,
            '1800': 619,
            '2000': 687,
            '2200': 756,
            '2400': 825,
            '2600': 893,
            '3000': 1031,
            '3500': 1202,
            '4000': 1374,
            '4500': 1546,
            '5000': 1717,
            '6000': 2061,
        },
        "26": {
            '40': 15,
            '80': 29,
            '100': 36,
            '120': 43,
            '160': 58,
            '200': 72,
            '300': 108,
            '400': 143,
            '600': 215,
            '800': 286,
            '1000': 358,
            '1200': 429,
            '1400': 500,
            '1600': 572,
            '1800': 643,
            '2000': 715,
            '2200': 786,
            '2400': 858,
            '2600': 929,
            '3000': 1072,
            '3500': 1250,
            '4000': 1429,
            '4500': 1607,
            '5000': 1786,
            '6000': 2143,
        },
        "30": {
            '40': 17,
            '80': 33,
            '100': 42,
            '120': 50,
            '160': 66,
            '200': 83,
            '300': 124,
            '400': 165,
            '600': 248,
            '800': 330,
            '1000': 413,
            '1200': 495,
            '1400': 577,
            '1600': 660,
            '1800': 742,
            '2000': 825,
            '2200': 907,
            '2400': 989,
            '2600': 1072,
            '3000': 1237,
            '3500': 1443,
            '4000': 1649,
            '4500': 1855,
            '5000': 2061,
            '6000': 2473,
        },
        "35": {
            '40': 20,
            '80': 39,
            '100': 49,
            '120': 58,
            '160': 77,
            '200': 97,
            '300': 145,
            '400': 193,
            '600': 289,
            '800': 385,
            '1000': 481,
            '1200': 577,
            '1400': 673,
            '1600': 770,
            '1800': 866,
            '2000': 926,
            '2200': 1058,
            '2400': 1154,
            '2600': 1250,
            '3000': 1443,
            '3500': 1683,
            '4000': 1923,
            '4500': 2164,
            '5000': 2404,
            '6000': 2885,
        },
        "40": {
            '40': 22,
            '80': 44,
            '100': 55,
            '120': 66,
            '160': 88,
            '200': 110,
            '300': 165,
            '400': 220,
            '600': 330,
            '800': 440,
            '1000': 550,
            '1200': 660,
            '1400': 770,
            '1600': 879,
            '1800': 989,
            '2000': 1099,
            '2200': 1209,
            '2400': 1319,
            '2600': 1429,
            '3000': 1649,
            '3500': 1923,
            '4000': 2198,
            '4500': 2473,
            '5000': 2747,
            '6000': 3297,
        }
    }
    const TabelleFestmittle = {
        "2,5": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 1,
            '20': 1,
            '24': 1,
            '28': 2,
            '32': 2,
            '36': 2,
            '40': 2,
            '50': 2,
            '60': 3,
            '70': 3,
            '80': 3,
            '90': 4,
            '100': 4,
            '120': 5,
            '140': 6,
            '160': 6,
            '180': 7,
            '200': 8,
            '220': 9,
            '250': 10,
        },
        "3": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 1,
            '20': 1,
            '24': 2,
            '28': 2,
            '32': 2,
            '36': 2,
            '40': 2,
            '50': 3,
            '60': 3,
            '70': 4,
            '80': 4,
            '90': 5,
            '100': 5,
            '120': 6,
            '140': 7,
            '160': 8,
            '180': 9,
            '200': 9,
            '220': 10,
            '250': 12,
        },
        "3,5": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 1,
            '20': 1,
            '24': 2,
            '28': 2,
            '32': 2,
            '36': 2,
            '40': 2,
            '50': 3,
            '60': 3,
            '70': 4,
            '80': 4,
            '90': 5,
            '100': 5,
            '120': 6,
            '140': 7,
            '160': 8,
            '180': 9,
            '200': 10,
            '220': 11,
            '250': 13,
        },
        "4": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 1,
            '20': 2,
            '24': 2,
            '28': 2,
            '32': 2,
            '36': 3,
            '40': 3,
            '50': 3,
            '60': 4,
            '70': 4,
            '80': 5,
            '90': 6,
            '100': 6,
            '120': 7,
            '140': 8,
            '160': 9,
            '180': 11,
            '200': 12,
            '220': 13,
            '250': 15,
        },
        "4,5": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 2,
            '20': 2,
            '24': 2,
            '28': 2,
            '32': 3,
            '36': 3,
            '40': 3,
            '50': 4,
            '60': 4,
            '70': 5,
            '80': 6,
            '90': 6,
            '100': 7,
            '120': 8,
            '140': 9,
            '160': 11,
            '180': 12,
            '200': 13,
            '220': 15,
            '250': 17,
        },
        "5": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 2,
            '20': 2,
            '24': 2,
            '28': 3,
            '32': 3,
            '36': 3,
            '40': 3,
            '50': 4,
            '60': 5,
            '70': 6,
            '80': 6,
            '90': 7,
            '100': 8,
            '120': 9,
            '140': 11,
            '160': 12,
            '180': 14,
            '200': 15,
            '220': 17,
            '250': 19,
        },
        "5,5": {
            '4': 1,
            '8': 1,
            '12': 1,
            '16': 2,
            '20': 2,
            '24': 2,
            '28': 3,
            '32': 3,
            '36': 3,
            '40': 4,
            '50': 5,
            '60': 5,
            '70': 6,
            '80': 7,
            '90': 8,
            '100': 9,
            '120': 10,
            '140': 12,
            '160': 13,
            '180': 15,
            '200': 17,
            '220': 18,
            '250': 21,
        },
        "6": {
            '4': 1,
            '8': 1,
            '12': 2,
            '16': 2,
            '20': 2,
            '24': 3,
            '28': 3,
            '32': 3,
            '36': 4,
            '40': 4,
            '50': 5,
            '60': 6,
            '70': 7,
            '80': 7,
            '90': 8,
            '100': 9,
            '120': 11,
            '140': 13,
            '160': 14,
            '180': 16,
            '200': 18,
            '220': 20,
            '250': 22,
        },
        "6,5": {
            '4': 1,
            '8': 1,
            '12': 2,
            '16': 2,
            '20': 2,
            '24': 3,
            '28': 3,
            '32': 3,
            '36': 4,
            '40': 4,
            '50': 5,
            '60': 6,
            '70': 7,
            '80': 8,
            '90': 9,
            '100': 10,
            '120': 12,
            '140': 14,
            '160': 15,
            '180': 17,
            '200': 19,
            '220': 21,
            '250': 24,
        },
        "7": {
            '4': 1,
            '8': 1,
            '12': 2,
            '16': 2,
            '20': 3,
            '24': 3,
            '28': 3,
            '32': 4,
            '36': 4,
            '40': 5,
            '50': 6,
            '60': 7,
            '70': 8,
            '80': 9,
            '90': 10,
            '100': 11,
            '120': 13,
            '140': 15,
            '160': 17,
            '180': 19,
            '200': 21,
            '220': 23,
            '250': 26,
        },
        "8": {
            '4': 1,
            '8': 1,
            '12': 2,
            '16': 2,
            '20': 3,
            '24': 3,
            '28': 4,
            '32': 4,
            '36': 5,
            '40': 5,
            '50': 6,
            '60': 8,
            '70': 9,
            '80': 10,
            '90': 11,
            '100': 12,
            '120': 15,
            '140': 17,
            '160': 19,
            '180': 22,
            '200': 24,
            '220': 26,
            '250': 30,
        },
        "9": {
            '4': 1,
            '8': 2,
            '12': 2,
            '16': 3,
            '20': 3,
            '24': 4,
            '28': 4,
            '32': 5,
            '36': 5,
            '40': 6,
            '50': 7,
            '60': 8,
            '70': 9,
            '80': 11,
            '90': 12,
            '100': 13,
            '120': 16,
            '140': 18,
            '160': 21,
            '180': 24,
            '200': 26,
            '220': 29,
            '250': 32,
        },
        "10": {
            '4': 1,
            '8': 2,
            '12': 2,
            '16': 3,
            '20': 3,
            '24': 4,
            '28': 4,
            '32': 5,
            '36': 6,
            '40': 6,
            '50': 8,
            '60': 9,
            '70': 10,
            '80': 12,
            '90': 13,
            '100': 15,
            '120': 17,
            '140': 20,
            '160': 23,
            '180': 26,
            '200': 29,
            '220': 31,
            '250': 36,
        },
        "11": {
            '4': 1,
            '8': 2,
            '12': 2,
            '16': 3,
            '20': 4,
            '24': 4,
            '28': 5,
            '32': 5,
            '36': 6,
            '40': 7,
            '50': 8,
            '60': 10,
            '70': 11,
            '80': 13,
            '90': 14,
            '100': 16,
            '120': 19,
            '140': 22,
            '160': 25,
            '180': 28,
            '200': 31,
            '220': 34,
            '250': 39,
        },
        "12": {
            '4': 1,
            '8': 2,
            '12': 2,
            '16': 3,
            '20': 4,
            '24': 4,
            '28': 5,
            '32': 6,
            '36': 6,
            '40': 7,
            '50': 9,
            '60': 10,
            '70': 12,
            '80': 14,
            '90': 15,
            '100': 17,
            '120': 20,
            '140': 24,
            '160': 27,
            '180': 30,
            '200': 34,
            '220': 37,
            '250': 42,
        },
        "13": {
            '4': 1,
            '8': 2,
            '12': 3,
            '16': 3,
            '20': 4,
            '24': 5,
            '28': 6,
            '32': 6,
            '36': 7,
            '40': 8,
            '50': 10,
            '60': 11,
            '70': 13,
            '80': 15,
            '90': 17,
            '100': 19,
            '120': 22,
            '140': 26,
            '160': 30,
            '180': 33,
            '200': 37,
            '220': 40,
            '250': 46,
        },
        "14": {
            '4': 1,
            '8': 2,
            '12': 3,
            '16': 4,
            '20': 5,
            '24': 5,
            '28': 6,
            '32': 7,
            '36': 8,
            '40': 9,
            '50': 11,
            '60': 13,
            '70': 15,
            '80': 17,
            '90': 19,
            '100': 21,
            '120': 25,
            '140': 29,
            '160': 33,
            '180': 37,
            '200': 41,
            '220': 45,
            '250': 51,
        },
        "15": {
            '4': 1,
            '8': 2,
            '12': 3,
            '16': 4,
            '20': 5,
            '24': 6,
            '28': 7,
            '32': 8,
            '36': 9,
            '40': 9,
            '50': 12,
            '60': 14,
            '70': 16,
            '80': 18,
            '90': 21,
            '100': 23,
            '120': 27,
            '140': 32,
            '160': 36,
            '180': 41,
            '200': 45,
            '220': 50,
            '250': 57,
        },
        "20": {
            '4': 2,
            '8': 3,
            '12': 4,
            '16': 5,
            '20': 6,
            '24': 7,
            '28': 8,
            '32': 9,
            '36': 11,
            '40': 12,
            '50': 15,
            '60': 17,
            '70': 20,
            '80': 23,
            '90': 26,
            '100': 29,
            '120': 34,
            '140': 40,
            '160': 45,
            '180': 51,
            '200': 57,
            '220': 62,
            '250': 71,
        }
    }

    function MatchNeigung() {
        if (neigungInt <= 2.5) {
            neigungInt = 2.5;
        }else if(neigungInt > 2.5 && neigungInt <= 3) {
            neigungInt = 3;
        } else if(neigungInt > 3 && neigungInt <= 3.5) {
            neigungInt = 3.5;
        } else if(neigungInt > 3.5 && neigungInt <= 4) {
            neigungInt = 4;
        } else if(neigungInt > 4 && neigungInt <= 4.5) {
            neigungInt = 4.5;
        } else if(neigungInt > 4.5 && neigungInt <= 5) {
            neigungInt = 5;
        } else if(neigungInt > 5 && neigungInt <= 7.5) {
            neigungInt = 7.5;
        } else if(neigungInt > 7.5 && neigungInt <= 10) {
            neigungInt = 10;
        } else if(neigungInt > 10 && neigungInt <= 12.5) {
            neigungInt = 12.5;
        } else if(neigungInt > 12.5 && neigungInt <= 15) {
            neigungInt = 15;
        } else if(neigungInt > 15 && neigungInt <= 20) {
            neigungInt = 20;
        } else if(neigungInt > 20 && neigungInt <= 25) {
            neigungInt = 25;
        } else if(neigungInt > 25 && neigungInt <= 26) {
            neigungInt = 26;
        } else if(neigungInt > 26 && neigungInt <= 30) {
            neigungInt = 30;
        } else if(neigungInt > 30 && neigungInt <= 35) {
            neigungInt = 35;
        } else if(neigungInt > 35 && neigungInt <= 40) {
            neigungInt = 40;
        }
    } 

    //this function calculate the result for Kn
    function RechnerKn() {
        if(gewichtInt <= 40) {   
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['40'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['40'];
            }
        } else if(gewichtInt <= 80) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['80'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['80'];
            }
        } else if(gewichtInt <= 100) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['100'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['100'];
            }
        } else if(gewichtInt <= 120) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['120'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['120'];
            }
        } else if(gewichtInt <= 160) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['160'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['160'];
            }
        } else if(gewichtInt <= 200) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['200'];
            } else {
                resultKN = TabelleKn [neigungInt.toString()]['200'];
            }
        } else if(gewichtInt <= 300) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['300'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['300'];
            }
        } else if(gewichtInt <= 400) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['400'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['400'];
            }
        } else if(gewichtInt <= 600) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['600'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['600'];
            }
        } else if(gewichtInt <= 800) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['800'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['800'];
            }
        } else if(gewichtInt <= 1000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['1000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['1000'];
            }
        } else if(gewichtInt <= 1200) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['1200'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['1200'];
            }
        } else if(gewichtInt <= 1400) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['1400'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn[neigungInt.toString()]['1400'];
            }
        } else if(gewichtInt <= 1600) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['1600'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn[neigungInt.toString()]['1600'];
            }
        } else if(gewichtInt <= 1800) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['1800'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['1800'];
            }
        } else if(gewichtInt <= 2000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['2000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['2000'];
            }
        } else if(gewichtInt <= 2200) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['2200'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['2200'];
            }
        } else if(gewichtInt <= 2400) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['2400'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['2400'];
            }
        } else if(gewichtInt <= 2600) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['2600'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['2600'];
            }
        } else if(gewichtInt <= 3000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['3000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['3000'];
            }
        } else if(gewichtInt <= 3500) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['3500'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['3500'];
            }
        } else if(gewichtInt <= 4000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['4000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['4000'];
            }
        } else if(gewichtInt <= 4500) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['4500'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['4500'];
            }
        } else if(gewichtInt <= 5000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['5000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['5000'];
            }
        } else if(gewichtInt <= 6000) {
            if(abstellzeitLess && neigungInt <= 2.5) {
                resultKN = TabelleKn['2,5<24']['6000'];
            } else {
                MatchNeigung();
                resultKN = TabelleKn [neigungInt.toString()]['6000'];
            }
        }
    }


    function MatchNeigungFestmittle() {
        if (neigungInt <= 2.5) {
            neigungInt = 2.5;
        }else if(neigungInt > 2.5 && neigungInt <= 3) {
            neigungInt = 3;
        } else if(neigungInt > 3 && neigungInt <= 3.5) {
            neigungInt = 3.5;
        } else if(neigungInt > 3.5 && neigungInt <= 4) {
            neigungInt = 4;
        } else if(neigungInt > 4 && neigungInt <= 4.5) {
            neigungInt = 4.5;
        } else if(neigungInt > 4.5 && neigungInt <= 5) {
            neigungInt = 5;
        } else if(neigungInt > 5 && neigungInt <= 5.5) {
            neigungInt = 5.5;
        } else if(neigungInt > 5.5 && neigungInt <= 6) {
            neigungInt = 6;
        } else if(neigungInt > 6 && neigungInt <= 6.5) {
            neigungInt = 6.5;
        } else if(neigungInt > 6.5 && neigungInt <= 7) {
            neigungInt = 7;
        } else if(neigungInt > 7 && neigungInt <= 8) {
            neigungInt = 8;
        } else if(neigungInt > 8 && neigungInt <= 9) {
            neigungInt = 9;
        } else if(neigungInt > 9 && neigungInt <= 10) {
            neigungInt = 10;
        } else if(neigungInt > 10 && neigungInt <= 11) {
            neigungInt = 11;
        } else if(neigungInt > 11 && neigungInt <= 12) {
            neigungInt = 12;
        } else if(neigungInt > 12 && neigungInt <= 13) {
            neigungInt = 13;
        } else if(neigungInt > 13 && neigungInt <= 14) {
            neigungInt = 14;
        } else if(neigungInt > 14 && neigungInt <= 15) {
            neigungInt = 15;
        } else if(neigungInt > 15 && neigungInt <= 20) {
            neigungInt = 20;
        }
    } 
    function RechnerFestmittle() {
        MatchNeigungFestmittle();
        resultFestMittle = TabelleFestmittle[neigungInt.toLocaleString()][radsätze];
    }
    

    RechnerKn();
    RechnerFestmittle();
    return [
        resultKN, 
        resultFestMittle
    ]
}

export default Rechner;