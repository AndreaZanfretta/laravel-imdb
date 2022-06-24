<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    @include('partials.header')


    <!-- Slider main container -->
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide"><img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2019/11/1-1.jpg?v=353239"></div>
          <div class="swiper-slide"><img src="https://www.focus.it/site_stored/imgs/0002/035/trucchi-foto-autore-tutorial-cover_216520.1020x680.jpg"></div>
          <div class="swiper-slide"><img src="https://www.keblog.it/wp-content/uploads/2019/12/le-piu-belle-foto-del-2019-15.jpg"></div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>




    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>