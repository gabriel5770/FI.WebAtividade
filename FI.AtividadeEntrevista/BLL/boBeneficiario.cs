using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class boBeneficiario
    {
        /// <summary>
        /// Inclui um novo cliente
        /// </summary>
        /// <param name="beneficiario">Objeto de cliente</param>
        public long Incluir(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiarios.DaoBeneficiario bene = new DAL.Beneficiarios.DaoBeneficiario();
            return bene.Incluir(beneficiario);
        }

        /// <summary>
        /// Altera um registro de cliente
        /// </summary>
        /// <param name="beneficiario">Objeto de cliente</param>
        public long Alterar(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiarios.DaoBeneficiario bene = new DAL.Beneficiarios.DaoBeneficiario();
            return bene.Alterar(beneficiario);
        }

        /// <summary>
        /// Excluir um registro de cliente
        /// </summary>
        /// <param name="beneficiario">Objeto de cliente</param>
        public long Excluir(DML.Beneficiario beneficiario)
        {
            DAL.Beneficiarios.DaoBeneficiario bene = new DAL.Beneficiarios.DaoBeneficiario();
            return bene.Excluir(beneficiario);
        }
    }
}
