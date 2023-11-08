<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="@yield("description")" />
        <meta name="keywords" content="@yield("keywords")" />
        <title>Start project laravel10 + vue3</title>
{{--        <link rel="stylesheet" href="{{ asset('/fonts/VeloSans/stylesheet.css') }}">--}}
        @vite(['resources/js/app.js'])
        @yield("css")
    </head>
    <body class="antialiased">
    <div id="app"></div>
    </body>
</html>
