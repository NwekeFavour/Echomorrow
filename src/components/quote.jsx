import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const data = [
  {
    title: 'Speak to Tomorrow with the Wisdom of Today',
    description: 'Take a moment to capture who you are, your dreams, doubts, and desires. Your future self will thank you for leaving behind a piece of your soul from today.',
  },
  {
    title: "Remind Yourself How Far You've Come",
    description: 'Sometimes, we forget the battles we’ve won and the strength it took to grow. A letter from your past can be the gentle encouragement your future self needs.',
  },
  {
    title: 'Set Intentions, Not Just Goals',
    description: "Writing to your future self isn't just about hope, it’s about planting seeds of purpose. Remind  yourself of what truly matters when the noise of life gets loud.",
  },
    {
    title: 'Speak Freely. No Judgment. Just You',
    description: "Your letter is private. It's a space to be honest, raw, and real. Write the words you wish someone would say to you, and let that someone be future-you.",
  }
];

export default function Quote() {
  return (
    <Box
      className="!w-full"
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 443,
        height: 270,
        margin: "auto",
        marginBottom: "20px",
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card className="!border-none" orientation="horizontal" size="sm" key={item.title} variant="outlined">
          <Box  sx={{ whiteSpace: 'nowrap', mx: 1, minWidth: 400, maxWidth: 300}}>
            <Typography className=" break-words   text-wrap italic" level="title-lg">"{item.title}"</Typography>
            <div className='relative '>
            <Typography className="tracking-[2px] absolute  top-[60px] break-words text-wrap" level="body-sm">{item.description}</Typography>
            </div>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
