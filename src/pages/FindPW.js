import boo from "../assets/images/dressed_standing_boo.svg";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from 'axios';
import React,{useState} from 'react'

const LogoBoo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

function FindPW() {
  const [user, setUser] = useState('');
  let sessionStorage = window.sessionStorage;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
    .get("http://114.206.145.160:3000/user/p")
    .then((res) => {
      console.log(res)
      console.log(res.data)
      sessionStorage.setItem("id", data.get("id"))
      sessionStorage.setItem("token", res.data)
      // debugger
      setUser(sessionStorage.getItem("id"));
      console.log(user)

      alert("로그인 성공")

      document.location.href = 'http://localhost:3000';
      console.log(user);
    })
    .catch((error) => {
      alert(error.response.data.message)
    })

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <LogoBoo src={boo} alt="GNUVILLAGE" />
        </Link>
        <Typography component="h1" variant="h4">
          GNUVILLAGE
        </Typography>
        <Typography component="h1" variant="h5">
          비밀번호 찾기
        </Typography>
        <div>
            GNUVILLAGE에 가입했던 이메일을 입력해주세요.<br/>
            비밀번호 재설정 메일을 보내드립니다.
        </div>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
            <TextField margin="normal" label="이름" name="name" required fullWidth />
            </Grid>            
                        
            <Grid item xs={12}>
                <TextField margin="normal" label="아이디" name="id" required fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <TextField margin="normal" label="이메일" name="email" required fullWidth/>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            비밀번호 재설정하기
          </Button>
          <Grid container justifyContent="space-evenly">
            <Grid item>
              <Link href="/findId">아이디 찾기</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default FindPW;
