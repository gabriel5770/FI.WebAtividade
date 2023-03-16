﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace WebAtividadeEntrevista.Models
{
    public class BeneficiarioModel
    {
        public long Id { get; set; }

        [Required]
        public string CPF { get; set; }

        [Required]
        public string Nome { get; set; }
    }
}