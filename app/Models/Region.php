<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Region extends Model{
    use HasFactory;
  
    protected $table = "Region";

    //se oculta los sgtes campos de la bd
    protected $hidden = [
        'created_at',
        'updated_at'
    ]; 

}