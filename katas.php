<?php

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/php

function solution($str) {
    if (strlen($str) % 2 != 0){
      $str .= "_";
    }
    return str_split($str, 2);
  }


//----------------------------------//