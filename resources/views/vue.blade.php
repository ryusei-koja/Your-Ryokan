<!DOCTYPE html>
<html lang="{{ config('app.locale')}}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>YOUR RYOKAN</title>
  <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
  <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
  <base href="<?php echo url('/');?>">
  <style>
    #app{
      overflow: hidden;
      background-image:url('http://perusonaryu.sakura.ne.jp/your-ryokan/images/washi.jpg');
      position:relative;
      font-family: "Noto Serif JP";
    }

    .content{
      margin-bottom:232px;
      height:100%;
    }

    @media (max-width: 670px){
      .content{
        margin-bottom:400px;
      }
    }
  </style>
</head>


<body style="width:100%; height:100%; margin-top:64px;">
  <div id="app" style="width:100%; height:100%;">
    <v-app  style="width:100%; height:100%;">
      <header-component></header-component>
      <div class="content">
        <router-view></router-view>
      </div>
      <footer-component></footer-component>

    </v-app>
  </div>
  @if(config('app.env') === 'local')
    <script src="{{mix('js/app.js')}}"></script>

  @elseif(config('app.env') === 'production')
    <script src="your-ryokan/js/app.js"></script>
  @endif


  
</body>
</html>