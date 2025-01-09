<?php



use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Homecontroller;
use App\Http\Controllers\Ordercontroller;
use App\Http\Controllers\Qrcodecontroller;

Route::get('/', [HomeController::class, 'index'])->name('Home');
Route::get('/qrcode',[Qrcodecontroller::class,'index'])->name('Qrcode');

// Route::post('/order', [OrderController::class, 'store'])->name('order.store');


