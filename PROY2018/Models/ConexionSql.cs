using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;

namespace PROY2018.Models
{
    public class ConexionSql
    {
        private SqlConnection cnn;
        private string sConexion;

        public ConexionSql()
        {

            sConexion = System.Configuration.ConfigurationManager.ConnectionStrings["conexionPRODUSql"].ConnectionString;
            cnn = new SqlConnection(sConexion);
            
        }

        public String Listar(string pa, params object[] parametros)
        {
            string jSon = "";
            string jSon2 = "";
            try
            {
                IDbDataParameter par = null;
                IDbCommand c = cnn.CreateCommand();
                c.Connection = cnn;
                c.CommandType = CommandType.StoredProcedure;
                c.CommandText = pa;

                for (int i = 0; i < parametros.Length; i += 2)
                {
                    par = c.CreateParameter();
                    par.ParameterName = "@" + parametros[i];
                    par.Value = parametros[i + 1];
                    c.Parameters.Add(par);
                }

                cnn.Open();
                IDataReader dr = c.ExecuteReader(CommandBehavior.CloseConnection);
                int numRows = 0;
                int count = dr.FieldCount;
                while (dr.Read())
                {
                    for (int i = 0; i < count; i++)
                    {
                        if ((numRows == 0) && (i == 0))
                        {
                            jSon2 += "'" + dr.GetValue(i).ToString().Trim() + "'";
                        }
                        else
                        {
                            jSon2 += ", '" + dr.GetValue(i).ToString().Trim() + "'";
                        }
                    }
                    numRows++;
                }
                if (jSon2 != "")
                {
                    jSon = "{'msj':1, 'cols':" + count + ", 'rows':" + numRows + ", 'data':[" + jSon2 + "]}";
                }
                else
                {
                    jSon = "{'msj':0}";
                }
            }
            catch (SqlException)
            {
                jSon = "{\"msj\": -1}";
            }
            Desconectar();
            return jSon;
        }

        public String Listar2(string pa, params object[] parametros)
        {
            string jSon = "";
            string jSon2 = "";
            try
            {
                IDbDataParameter par = null;
                IDbCommand c = cnn.CreateCommand();
                c.Connection = cnn;
                c.CommandType = CommandType.StoredProcedure;
                c.CommandText = pa;

                for (int i = 0; i < parametros.Length; i += 2)
                {
                    par = c.CreateParameter();
                    par.ParameterName = "@" + parametros[i];
                    par.Value = parametros[i + 1];
                    c.Parameters.Add(par);
                }

                cnn.Open();
                IDataReader dr = c.ExecuteReader(CommandBehavior.CloseConnection);
                int numRows = 0;
                int count = dr.FieldCount;
                while (dr.Read())
                {
                    for (int i = 0; i < count; i++)
                    {
                        if ((numRows == 0) && (i == 0))
                        {
                            jSon2 += "'" + dr.GetValue(i).ToString().Trim() + "'";
                        }
                        else
                        {
                            jSon2 += ", '" + dr.GetValue(i).ToString().Trim() + "'";
                        }
                    }
                    numRows++;
                }
                if (jSon2 != "")
                {
                    //jSon = "{'msj':1, 'cols':" + count + ", 'rows':" + numRows + ", 'data':[" + jSon2 + "]}";
                    jSon = jSon2.Replace("'", "");
                }
                else
                {
                    jSon = "{'msj':0}";
                }
            }
            catch (SqlException)
            {
                jSon = "{\"msj\": -1}";
               }
            Desconectar();
            return jSon;
        }

        public void Desconectar()
        {
            if (cnn != null)
                cnn.Close();
        }

       
    }


}