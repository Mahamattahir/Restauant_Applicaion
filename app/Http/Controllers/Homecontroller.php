<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Les plats peuvent être récupérés de la base de données.
        $menu = [
            ['id' => 1, 'name' => 'Pizza Margherita', 'price' => 12.99, 'image' => '/images/pizza.jpg'],
            ['id' => 2, 'name' => 'Pâtes Carbonara', 'price' => 14.99, 'image' => '/images/pasta.jpg'],
            ['id' => 3, 'name' => 'Tiramisu', 'price' => 6.99, 'image' => '/images/tiramisu.jpg'],
        ];

        return Inertia::render('Home', [
            'menu' => $menu,
        ]);
    }
}
