import "./App.css";
import Card from "./Components/Card";
import "./App.css";
import { Button, Container, Grid, Input, Stack, Textarea } from "@mantine/core";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "Dağ 1",
    par: "Açıklama 1",
  },
  {
    id: 2,
    title: "Dağ 2",
    par: "Açıklama 2",
  },
  {
    id: 3,
    title: "Dağ 3",
    par: "Açıklama 3",
  },
  {
    id: 4,
    title: "Dağ 4",
    par: "Açıklama 4",
  },
  
];

function App() {
  const [list, setList] = useState(arr)
  const [title, setTitle] = useState("")
  const [paragraph, setParagraph] = useState("")

  // Kart Ekleme Butonu
  const click = () => {
    setTitle("")
    setParagraph("")
    const copyList = [...list]
    copyList.push({
      id:5,
      title: title,
      par:paragraph
    })
    setList(copyList)
  }
  
  return (
    <Container className="App" size={1000}>
      <h1>Kart Oluşturma</h1>

      <Stack>
        <Input.Wrapper label="Başlık"> {/* Input'a label eklemek için "Input.Wrapper" ile kapsadık. */}
          <Input placeholder="Başlık yazınız.." value={title} onChange={(e) => {setTitle(e.target.value)}} ></Input>
        </Input.Wrapper>

        <Textarea placeholder="Paragraf yazınız.." label="Paragraf" withAsterisk value={paragraph} onChange={(e) => {setParagraph(e.target.value)}}></Textarea>

        
      </Stack>
      <div style={{ display: 'flex', justifyContent: 'center',}}>
        <Button color="teal" radius="md" size="md" mt={20} style={{ width: '20%'}} onClick={click}>
          Kart ekle
        </Button>
      </div>
     

      <Grid className="Cards">

          {list.map(({ par, title }, i) => (
            <Grid.Col span={4} key={`index ${i}`}> {/* hangi elemanı map'liyorsak, çokluyorsak key orda olmalı. */}
              <Card  par={par} title={title} a={i}></Card>
            </Grid.Col>
          ))}

      </Grid>

      
    </Container>
  );
}

export default App;
