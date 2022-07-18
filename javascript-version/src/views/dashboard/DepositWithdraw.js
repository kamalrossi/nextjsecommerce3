
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: '3K',
    subtitle: 'Fashion Blogger',
    title: 'Veronica Trenchea',
    logo: '/images/polishfaces/1.png'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '3K',
    title: 'Krunikova Heimin',
    subtitle: 'Tech Blogger',
    logo: '/images/policefaces/2.png'
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: '3K',
    title: 'Verdana Meiani',
    subtitle: 'Climate Blogger',
    logo: '/images/policefaces/3.png'
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: '2K',
    title: 'Kiara Zunaza',
    subtitle: 'Climate Blogger',
    logo: '/images/policefaces/4.png'
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: '2K',
    title: 'Milakova Zuaana',
    subtitle: 'Fashion Blogger',
    logo: '/images/policefaces/5.png',
    ,
  }
]

const withdrawData = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: '2K',
    title: 'Katerina Nina',
    subtitle: 'Reporter',
    logo: '/images/policefaces/6.png',
  },
  {
    logoWidth: 34,
    logoHeight: 34,
    amount: '2K',
    title: 'Zuana Magina',
   logo: '/images/policefaces/7.png',
    subtitle: 'Reporter'
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '2K',
    title: 'Daniela Suparova',
    subtitle: 'Reporter',
    logo: '/images/policefaces/8.png',
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: '2K',
    title: 'Margerata Hasina',
    subtitle: 'Reporter',
    logo: '/images/policefaces/9.png',
  },
  {
    logoWidth: 36,
    logoHeight: 21,
    amount: '2K',
    title: 'Pamela Kurikova',
    logo: '/images/policefaces/10.png',
    subtitle: 'Reporter'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Rated Blogger'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Reporter'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {withdrawData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 36, display: 'flex', justifyContent: 'center' }}>
                  <img src={item.logo} alt={item.title} width={item.logoWidth} height={item.logoHeight} />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'error.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default DepositWithdraw
