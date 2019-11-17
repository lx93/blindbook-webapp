import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ReactPlayer from 'react-player'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  },
  card: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

const AudioCard = ({ name, image, url }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme()

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Card>
      <header>
        <Typography component='h5' variant='h5'>
          Live From Space {name}
        </Typography>
      </header>
      <section>
        <IconButton aria-label='previous'>
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label='play/pause' onClick={handleClick} >
          <PlayArrowIcon className={classes.playIcon} />
          <section style={{ width: 50, height: 50 }}>
            <ReactPlayer
              url={url}
              playing={isPlaying}
            />}
          </section>

        </IconButton>
        <IconButton aria-label='next'>
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </section>
      <section>
        <img src='./1.jpeg' />
      </section>
    </Card>
  )
}

export default AudioCard
