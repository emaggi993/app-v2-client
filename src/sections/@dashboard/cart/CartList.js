
import { useContext, useCallback , useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridCellEditStopParams } from '@mui/x-data-grid';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'
import { CartContext } from '../../../context/ContextCart';

const useFakeMutation = () => {
  return useCallback(
    (user) =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          if (user.name?.trim() === '') {
            reject(new Error("Error while saving user: name can't be empty."));
          } else {
            resolve({ ...user, name: user.name?.toUpperCase() });
          }
        }, 200),
      ),
    [],
  );
};
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'descripcion',
    headerName: 'Descripcion',
    width: 150,
    editable: false,
  },
  {
    field: 'precio',
    headerName: 'Precio Unitario',
    width: 150,
    type: 'number',
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Cantidad',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'subTotal',
    headerName: 'Sub Total',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    type: 'number',
    width: 160,
    valueGetter: (params) =>
    params.row.amount*params.row.precio,
  },
];
export default function CartList() {
  const mutateRow = useFakeMutation();
  
  const { cartItems, editItemsToCart, deleteItemToCart} = useContext(CartContext);
  const [snackbar, setSnackbar] = useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = useCallback(
    async (cartItemRow) => {
      editItemsToCart(cartItemRow)
      setSnackbar({ children: 'Cantidad cambiada satisfactoriamente', severity: 'success' });
      return cartItemRow;
    },
    [editItemsToCart],
  );

  const handleProcessRowUpdateError = useCallback((error) => {
    setSnackbar({ children: error.message, severity: 'error' });
  }, []);


  return (
    <><Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
    processRowUpdate={processRowUpdate}
    onProcessRowUpdateError={handleProcessRowUpdateError}
      rows={cartItems}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
     {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
  </Box></>
    
  );
}








