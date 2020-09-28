import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

function UserCommentModal(props){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return(
    <div>
      <div onClick={handleClickOpen}>
        Open form dialog
      </div>
      <Dialog open={open} onClose={handleClose}>
        <div >Déjanos tu comentario!</div>
        <DialogContent>
          C.T.A. text in modal
          <textarea
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <div onClick={handleClose} >
            Cancel
          </div>
          <div onClick={handleClose} >
            Subscribe
          </div>
        </DialogActions>
      </Dialog>
    </div>
    )
} export {UserCommentModal};
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function SingInUpModal(props){

} export {SingInUpModal};

