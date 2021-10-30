import React, { useState } from 'react'



import {
    Button,
    Form,
    Input,
    InputDiv,
    Label,
} from '../../globalStyles'
import alert from '../../redux/alert/actions' 

import GoogleAdsApi  from 'google-ads-api'


export default function KeywordResearch() {

    const [keywordData, setKeywordData] = useState({
        keyword: ''
    })

    const {keyword} = keywordData
    
    const changeKeywordData = e => { setKeywordData({ ...keywordData, [e.target.name]: e.target.value })  }
     

    
    return (
        <>
            <Form onSubmit={''} >
                <InputDiv style={{margin: 0}} size={4}> 
                    <Input value={keyword} name="keyword" onChange={changeKeywordData} id="keyword" placeholder="Keyword" type="text" />
                </InputDiv>
                <Button type="submit" >Get Keyword</Button>
            </Form>
        </>
    )
}
