<?php

namespace Database\Factories;

use App\Models\Calle;
use Illuminate\Database\Eloquent\Factories\Factory;

class CalleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Calle::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'calle_nombre' => $this->faker->streetName(),
            'numero' => $this->faker->postcode(),  
            'cod_ciudad' => $this->faker->numberBetween($min=1 , $max=15)                    
        ];
    }
}
