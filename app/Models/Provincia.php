<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Provincia extends Model{
    use HasFactory;
  
    protected $table = "provincia";

    //se oculta los sgtes campos de la bd
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}