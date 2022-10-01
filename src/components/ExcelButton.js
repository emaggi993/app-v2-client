import ReactExport from "react-export-excel";
import { Button } from "@mui/material";
import { COMPANY_NAME, MESES } from "../utils/constantes";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function ExcelButton({data}) {
    const date = new Date();
    const mes = MESES[date.getMonth()+1]
    const anio = date.getFullYear()
  return (
    <ExcelFile filename={`${mes}-${anio}-${COMPANY_NAME}`} element={<Button style={{color: "white"}} variant="contained" color="success">
    Lista de precios
  </Button>}>
                <ExcelSheet data={data} name="Productos">
                    <ExcelColumn label="codigo" value="code"/>
                    <ExcelColumn label="descripcion" value="descripcion"/>
                    <ExcelColumn label="existencia" value="existencia"/>
                    <ExcelColumn label="precio" value="precio"/>
                </ExcelSheet>
            </ExcelFile>
  )
}

export default ExcelButton