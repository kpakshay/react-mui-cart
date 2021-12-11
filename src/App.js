
      import React,{useState, useEffect} from 'react';
      import {Grid, Box} from '@mui/material';
      import Card from '@mui/material/Card';
      import CardActions from '@mui/material/CardActions';
      import CardContent from '@mui/material/CardContent';
      import Button from '@mui/material/Button';
      import Typography from '@mui/material/Typography';
      import { padding } from '@mui/system';
      import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
      import Badge from '@mui/material/Badge';
      
      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' ,m:'5%'}}
        >
          •
        </Box>
      );
      
      export default function BasicCard() { 
        const [count,setCount]=useState(0);
        const [toggle1,setToggle1]=useState(true);
        const [toggle2,setToggle2]=useState(true);
        const [toggle3,setToggle3]=useState(true);
        const toggleFunctionalityFree=()=>{
          if (toggle1==true){
            setCount(count+1)
          }else{
            setCount(count-1)
          }
          setToggle1(!toggle1);
        }
        const toggleFunctionalityPlus=()=>{
          if (toggle2==true){
            setCount(count+1)
          }else{
            setCount(count-1)
          }
          setToggle2(!toggle2);
        }
        const toggleFunctionalityPremium=()=>{
          if (toggle3==true){
            setCount(count+1)
          }else{
            setCount(count-1)
          }
          setToggle3(!toggle3);
        }
        
        return (
        
        <div sx={{alignContent:"right" ,padding:"3"}}>
          <Grid item xs={12} height="60px" >
        <Badge  color="secondary" badgeContent={count}>
        <ShoppingCartIcon  fontSize='large' color='main'/>
        </Badge>
        </Grid>
        
        <Grid container spacing={2} sx={{bgcolor:'blue', pt:"20px", justifyContent:"center", width:'90%',height:"100vh"}}>
          <Grid item>
            <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px' }}>
              <CardContent sx={{alignContent:'center'}}>
                <Typography sx={{ fontSize: 24 }} variant="h1" color="lightgray"  align="center" gutterBottom>
                  <b>FREE</b>
                </Typography>
                <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
                  $0<span sx={{ fontSize: 14 }}>/month</span>
                </Typography>
                <hr/>
                <Typography variant="h5" component="div" sx={{pl:'10%'}}>
                  <div>✓ Single User</div>
                  <div>✓ 5GB Storage</div>
                  <div>✓ Unlimited Public Project</div>
                  <div>✓ Community Access</div>
                </Typography>
                <Typography variant="h6" sx={{pl:'10%'}} color="text.secondary">
                <div>✗ Unlimited Private Project</div>
                <div>✗ Dedicated Phone Support</div>
                <div>✗ Free Subdomain</div>
                <div>✗ Monthly Status Report</div>
                </Typography>
              </CardContent>
              <CardActions sx={{pl:"12%"}}>
                {(toggle1)?
                <Button size="large" variant="contained" style={{ width:"300px" }} onClick={toggleFunctionalityFree}>Add to Cart</Button>:
                <Button size="large" variant="contained" style={{ width:"300px" }} onClick={toggleFunctionalityFree}>Remove</Button>}
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px'}}>
              <CardContent sx={{alignContent:'center'}}>
                <Typography sx={{ fontSize: 24 }} color="lightgray"  align="center" gutterBottom>
                  <b>PLUS</b>
                </Typography>
                <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
                  $9/month
                </Typography>
                <hr/>
                <Typography variant="h6" component="div" sx={{pl:'10%'}}>
                  <div>✓ Single User</div>
                  <div>✓ 5GB Storage</div>
                  <div>✓ Unlimited Public Project</div>
                  <div>✓ Community Access</div>
                  <div>✓ Unlimited Private Project</div>
                  <div>✓ Dedicated Phone Support</div>
                  <div>✓ Free Subdomain</div>
                </Typography>
                <Typography variant="h6" sx={{pl:'10%'}} color="text.secondary">
                
                <div>✗ Monthly Status Report</div>
                </Typography>
              </CardContent>
              <CardActions sx={{pl:"12%"}}>
                {(toggle2)?
                <Button size="large" variant="contained" style={{ width:"300px" }} onClick={toggleFunctionalityPlus}>Add to Cart</Button>:
                <Button size="large" variant="contained" style={{ width:"300px" }} onClick={toggleFunctionalityPlus}>Remove</Button>}
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px'}}>
              <CardContent sx={{alignContent:'center'}}>
                <Typography sx={{ fontSize: 24 }} color="lightgray"  align="center" gutterBottom>
                  <b>PREMIUM</b>
                </Typography>
                <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
                  $49/month
                </Typography>
                <hr/>
                <Typography variant="h6" component="div" sx={{pl:'10%'}}>
                  <div>✓ Single User</div>
                  <div>✓ 5GB Storage</div>
                  <div>✓ Unlimited Public Project</div>
                  <div>✓ Community Access</div>
                  <div>✓ Unlimited Private Project</div>
                  <div>✓ Dedicated Phone Support</div>
                  <div>✓ Free Subdomain</div>
                  <div>✓ Monthly Status Report</div>
                </Typography>
              </CardContent>
              <CardActions sx={{pl:"12%"}}>
                {(toggle3)?
                <Button size="large" variant="contained" style={{ width:"300px" }} onClick={toggleFunctionalityPremium}>Add to Cart</Button>:
                <Button size="large" variant="contained" style={{ width:"300px"}} onClick={toggleFunctionalityPremium}>Remove</Button>}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </div>
          
        );
        }
      
      