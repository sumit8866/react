// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Skeleton from '@mui/material/Skeleton';

// const data = [
//   {
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396k views',
//     createdAt: 'a week ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
//     title: 'Queen - Greatest Hits',
//     channel: 'Queen Official',
//     views: '40M views',
//     createdAt: '3 years ago',
//   },
//   {
//     src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
//     title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
//     channel: 'Calvin Harris',
//     views: '130M views',
//     createdAt: '10 months ago',
//   },
// ];

// function Media(props) {
//   const { loading = false } = props;

//   return (
//     <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
//           {item ? (
//             <img
//               style={{ width: 210, height: 118 }}
//               alt={item.title}
//               src={item.src}
//             />
//           ) : (
//             <Skeleton variant="rectangular" width={210} height={118} />
//           )}
//           {item ? (
//             <Box sx={{ pr: 2 }}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{ display: 'block', color: 'text.secondary' }}
//               >
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ pt: 0.5 }}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
//   );
// }

// Media.propTypes = {
//   loading: PropTypes.bool,
// };

// export default function YouTube() {
//   return (
//     <Box sx={{ overflow: 'hidden' }}>
//       <Media loading />
//       <Media />
//     </Box>
//   );
// }




import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

function Media(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <>
    <div>
      <Media loading />
      <Media />
    </div>

    <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
    </>
  );
}

