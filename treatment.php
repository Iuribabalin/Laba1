<?php
    $start_time = microtime();
    $r = $_POST['r'];
    $x = $_POST['x'];
    $y = $_POST['y'];
    $yy = $_POST['YY'];
    $max = 17;
    $out = "";
    $flag = 0;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!preg_match('/^-?\d+(\.|,)?\d*$/', $r) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $x) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $y))
            $flag = 1;
        if($x < -3 || $x > 5)
            $flag = 1;
        if($r< 1 || $r>5)
            $flag = 1;
        if($y<-5 || $y>5)
            $flag = 1;
        if(strlen($y) > $max || strlen($x) > $max || strlen($r) > $max){
            $flag = 1;
        }

        if(((($x*$x + $y*$y) <= $r*$r && $x >=0 && $y >= 0)||
            ($y-$x<=$r/2 && $x<=0 && $y>=0)||
            ($x>=0 && $y<=0 && $x<=$r/2 && $y>= (-1)*$r))){
            if($y == $yy) {
                $out = "Входит";
            }else{
                $out = "Не входит";
            }
        }else{
            $out = "Не входит";
        }

        $answer = $flag;
        $answer .= ";";
        $answer .= $x;
        $answer .= ";";
        $answer .= $y;
        $answer .= ";";
        $answer .= $r;
        $answer .= ";";
        $answer .= $out;
        $answer .= ";";
        $answer .= date("Y-m-d H:i:s");
        $answer .= ";";
        $answer .= microtime()-$start_time;
        $answer .= "/";
        echo $answer;
    }
?>