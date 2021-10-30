import React, { useState, useEffect } from 'react'



import {
    Button,
    Form,
    Input,
    InputDiv,
    Label,
} from '../../globalStyles'
import alert from '../../redux/alert/actions' 

import axios from "axios"


export default function KeywordResearch() {

    const [keywordData, setKeywordData] = useState({
        keyword: ''
    })

    const [top, setTop] = useState(null)
    const [rising, setRising] = useState(null)

    const {keyword} = keywordData
    
    const changeKeywordData = e => { setKeywordData({ ...keywordData, [e.target.name]: e.target.value })  }

 
    const getKeyword = async e => {
        e.preventDefault()
        const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }; 
            const body = JSON.stringify({keyword: keyword}) 

            axios.post(`http://127.0.0.1:8000/api/keywords/`, body, config)
            .then((response) => {
                console.log(response?.data)
                if(response.status === 200){ 
                    if(response){
                        let data = response.data
                        let newTop = []
                        let newRising = [] 
                        for (let i = 0; i < 25; i++) {

                            newTop.push({
                                query: data[keyword].top.query[i],
                                value: data[keyword].top.value[i],
                            }) 
                            newRising.push({
                                query: data[keyword].rising.query[i],
                                value: data[keyword].rising.value[i],
                            }) 
                        }
                        setRising(newRising)
                        setTop(newTop)
                    }
                    
                } else { 
                }
            }).catch(() => { 
            })

    }
 
    
    return (
        <>
            <Form onSubmit={getKeyword} >
                <InputDiv style={{margin: 0}} size={4}> 
                    <Input value={keyword} name="keyword" onChange={changeKeywordData} id="keyword" placeholder="Keyword" type="text" />
                </InputDiv>
                <Button type="submit" >Get Keyword</Button>
            </Form> 
        </>
    )
}
