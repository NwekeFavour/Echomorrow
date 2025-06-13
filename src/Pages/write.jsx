import React, { useRef, useState } from 'react';
import Editor from '../components/editor';
import Navbar from '../components/user/navbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

function Write() {
    const [open, setOpen] = useState(false);
    const quillRef = useRef(null);
    const [scheduleDate, setScheduleDate] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSchedule = async () => {
    const editorContent = quillRef.current?.root.innerHTML;

    if (!editorContent || !scheduleDate) return;

    try {
        const res = await fetch('http://localhost:5000/api/letters/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            message: editorContent,
            deliveryDate: scheduleDate,
        }),
        });

        const data = await res.json();
        if (res.ok) {
        alert('Your letter has been scheduled!');
        } else {
        alert('Something went wrong: ' + data.error);
        }
    } catch (error) {
        console.error('Error scheduling letter:', error);
        alert('An error occurred.');
    }

    setOpen(false);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ my: 1 }}
            />

          <Editor ref={quillRef} />
          <div className="flex justify-end md:my-4 sm:my-3 my-2">
            <Button variant="contained" onClick={handleOpen}>
              Schedule My Letter
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
              <Box sx={modalStyle}>
                <h2 id="modal-title">Schedule Letter Delivery</h2>
                <TextField
                  fullWidth
                  type="date"
                  label="Delivery Date"
                  InputLabelProps={{ shrink: true }}
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  sx={{ my: 2 }}
                />
                <Button
                  variant="contained"
                  onClick={handleSchedule}
                  disabled={!scheduleDate}
                  fullWidth
                >
                  Confirm Schedule
                </Button>
              </Box>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Write;
