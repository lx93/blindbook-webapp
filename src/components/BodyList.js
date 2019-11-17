import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AudioCard from './AudioCard'

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
  details: {
    display: 'flex',
    flexDirection: 'column'
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

const dummy = [
  { _id: '5dd080717e1ddd77631000f9', name: 'audio-0', url: 'https://cdn.fbsbx.com/v/t59.3654-21/69677893_1350503971778336_498812571134984192_n.mp4/audioclip-1573945454000-2113.mp4?_nc_cat=108&_nc_oc=AQm3rz1dc051CQZBmXlBAFmYoADf8yagONPpEcnHq1UA-OicKNXO4mbjmBW24GlhlO9W1Eeo0Qo5mL65cOycv5sF&_nc_ht=cdn.fbsbx.com&oh=e5f81bf6f0363538da91d99edb0f1cb1&oe=5DD2FB3B', count: 0 },
  { _id: '5dd080e38e076b7859bde3d7', name: 'audio-1', url: 'https://cdn.fbsbx.com/v/t59.3654-21/69878226_766791687079592_7273603811007004672_n.mp4/audioclip-1573945569000-2136.mp4?_nc_cat=100&_nc_oc=AQkg38m4hkMlY-HlyUC2PBG6eTFiNq6p8u_NWvyzGmKO2dtBnAUHm3X08F2s3rhRAGsStkZXLmDCm8f1wmKXaCym&_nc_ht=cdn.fbsbx.com&oh=835a1c0441e73f36af4bb3c9bf1910ed&oe=5DD1E141', count: 1 },
  { _id: '5dd081108e076b7859bde3d8', name: 'audio-2', url: 'https://cdn.fbsbx.com/v/t59.3654-21/72923993_3072910976055650_8659401534779424768_n.mp4/audioclip-1573945614000-2624.mp4?_nc_cat=106&_nc_oc=AQlknK6Oe9O0Jy4lmQNUXYy8G1WaoySQd9Yxa7iB_13if9zktwc7EhZrjw0UlgDfu00Skd8aEm7ZAI048eDNC275&_nc_ht=cdn.fbsbx.com&oh=5ae4dcf261e038842d9951343f6babc8&oe=5DD2D2E0', count: 2 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
  { _id: '5dd082d3ef23ed7914f5442a', name: 'audio-3', url: 'https://cdn.fbsbx.com/v/t59.3654-21/70916581_593459504795236_1332995941296242688_n.mp4/audioclip-1573946066000-1904.mp4?_nc_cat=102&_nc_oc=AQlNiNH7e2arXb7U0CVH-ZtOaP9zrtMIZfhbJ4oam9612mmEfPDKH0Y9FZP_NUhgYjUSwjSK21UrXf9ZKepGDDeF&_nc_ht=cdn.fbsbx.com&oh=570fc743ff2bd3c9cd9d5e07ee3431fe&oe=5DD2F808', count: 3 },
]

const BodyList = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {
          dummy.map((element, idx) => {
            const { name, image, url } = element
            return (
              <Grid item style={{ border: '1px solid black' }}>
                <AudioCard
                  key={`audio-card-${idx}`}
                  name={name}
                  image={image}
                  url={url}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </div>

  )
}
export default BodyList

// 'https://cdn.fbsbx.com/v/t59.3654-21/69677893_1350503971778336_498812571134984192_n.mp4/audioclip-1573945454000-2113.mp4?_nc_cat=108&_nc_oc=AQm3rz1dc051CQZBmXlBAFmYoADf8yagONPpEcnHq1UA-OicKNXO4mbjmBW24GlhlO9W1Eeo0Qo5mL65cOycv5sF&_nc_ht=cdn.fbsbx.com&oh=e5f81bf6f0363538da91d99edb0f1cb1&oe=5DD2FB3B'