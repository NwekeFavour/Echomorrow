import React, { useRef, useState } from 'react';
import Editor from '../components/editor';
import Navbar from '../components/user/navbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Write() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const quillRef = useRef(null);
  const [scheduleDate, setScheduleDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (!loading) setOpen(false);
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSchedule = async () => {
    const editorContent = quillRef.current?.root.innerHTML;

    if (!editorContent || !scheduleDate || !name || !email) {
      showSnackbar('Please fill in all fields.', 'warning');
      return;
    }
    const deliveryDateISO = new Date(scheduleDate).toISOString();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showSnackbar('Please enter a valid email address.', 'warning');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://echomorrow.vercel.app/api/letters/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: editorContent,
          deliveryDate: deliveryDateISO,
        }),
      });
    
      const data = await res.json();
      if (res.ok) {
        showSnackbar('✅ Your letter has been scheduled!', 'success');
        setName('');
        setEmail('');
        setScheduleDate('');
        quillRef.current.root.innerHTML = '';
        setOpen(false);
      } else {
        showSnackbar('❌ ' + (data.error || 'Something went wrong.'), 'error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      showSnackbar('⚠️ An unexpected error occurred.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto md:mt-6 mt-4 sm:w-[70%] md:w-[80%] px-4">
        <div className="mb-4">
          <p className="m-0 md:text-[40px] italic sm:text-[35px] text-[28px]">
            Write a Letter to Your Future Self
          </p>
          <p className="m-0">What would you say to yourself if no one else could read it?</p>
        </div>

        <form>
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ my: 1 }}
          />
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ my: 1 }}
          />

          <Editor ref={quillRef} />

          <div className="flex justify-end md:my-4 sm:my-3 my-2">
            <Button variant="contained" onClick={handleOpen}>
              Schedule My Letter
            </Button>
          </div>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
            <Box sx={modalStyle}>
              <h2 className='my-3' id="modal-title">Schedule Letter Delivery</h2>

              <TextField
              className='!mb-2'
                fullWidth
                type="datetime-local"
                label="Delivery Date"
                InputLabelProps={{ shrink: true }}
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />


              <Button
                variant="contained"
                onClick={handleSchedule}
                disabled={!scheduleDate || loading}
                fullWidth
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {loading ? 'Scheduling...' : 'Confirm Schedule'}
              </Button>
            </Box>
          </Modal>
        </form>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Write;
