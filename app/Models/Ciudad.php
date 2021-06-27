<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Ciudad extends Model{
    use HasFactory;
  
    protected $table = "ciudad";

    //se oculta los sgtes campos de la bd
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}