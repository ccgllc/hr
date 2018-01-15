<?php

namespace App\Dashboard;

class Dataset 
{
	public $data = [];

	public function setData($data)
	{
		return $this->data[] = $data;
	}
}