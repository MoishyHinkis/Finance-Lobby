<?php
namespace App\Enums;

enum RecordStatus: string
{
    case InStock = "InStock";
    case OutOfStock = "OutOfStock";
}