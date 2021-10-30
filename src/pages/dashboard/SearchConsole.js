import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import DataTable from 'react-data-table-component';



import {
    Button,
    Form,
    Input,
    InputDiv,
    Label,
} from '../../globalStyles'
import alert from '../../redux/alert/actions'
import { UrlForm, DataWrap } from '../styles/dashboard/SearchConsole.styles'

export default function SearchConsole() {
    const [siteData, setSiteData] = useState({
        url: '',
        startDate: '',
        endDate: '',
    })
    const [data, setData] = useState(null)

    const { url, startDate, endDate } = siteData

    const changeSiteData = e => { setSiteData({ ...siteData, [e.target.name]: e.target.value }); console.log(siteData) }

    const dispatch = useDispatch()

    function authenticate() {
        return window.gapi.auth2.getAuthInstance()
            .signIn({ scope: "https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly" })
            .then(function (data) { dispatch(alert('Signin successfull!!')); console.log(data) },
                function (err) { dispatch(alert('Signin Failed!!', 'danger')) });
    }
    function loadClient() {
        window.gapi.client.setApiKey("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");
        return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/searchconsole/v1/rest")
            .then(function () { console.log("window.gapi client loaded for API"); },
                function (err) { console.error("Error loading window.gapi client for API", err); });
    }

    function execute() {
        return window.gapi.client.webmasters.searchanalytics.query({
            "siteUrl": `${url}`,
            "resource": {
                "startDate": `${startDate}`,
                "endDate": `${endDate}`,
                "dimensions": [
                    "PAGE"
                ]
            }
        })
            .then(function (response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                setData(response.result.rows)
            },
                function (err) { 
                    if (err.status === 403) { 
                        dispatch(alert('Please login with the account which has all the permission for this domain.', 'danger')) 
                    } else if(err.status === 400)  {
                        dispatch(alert('Please submit the data properly.', 'danger')) 
                    } 
                });
    }
    window.gapi.load("client:auth2", function () {
        window.gapi.auth2.init({ client_id: "87940476376-uudqfqr5songnvftuf887qtcj96drfqs.apps.googleusercontent.com" });
    });

    const getSiteData = async e => {
        e.preventDefault() 
        
        await authenticate().then(loadClient)
        await execute() 

    }
    const columns = [
        {
            name: 'Link',
            selector: row => <a href={`${row.keys[0]}`} target="blank">{row.keys[0]}</a>,
            sortable: true,
            width: '400px'
        },
        {
            name: 'Clicks',
            selector: row => row.clicks,
            sortable: true,
        },
        {
            name: 'CTR',
            selector: row => row.ctr,
            sortable: true,
        },
        {
            name: 'Impressions',
            selector: row => row.impressions,
            sortable: true,
        },
        {
            name: 'Position',
            selector: row => row.position,
            sortable: true,
        },
    ];
     


 

    return (
        <>
            <Form onSubmit={getSiteData} >
                <InputDiv size={4}>
                    <Label htmlFor="email">Site Url</Label>
                    <Input value={url} name="url" onChange={changeSiteData} id="url" placeholder="Site Url" type="text" />
                </InputDiv>
                <InputDiv size={4}>
                    <Label htmlFor="email">Start Date</Label>

                    <Input value={startDate} name="startDate" onChange={changeSiteData} id="sDate" placeholder="Start Date" type="date" />
                </InputDiv>
 
                <InputDiv size={4}>
                    <Label htmlFor="email">End Date</Label>
                    <Input value={endDate} name="endDate" onChange={changeSiteData} id="eDate" placeholder="End Date" type="date" />
                </InputDiv>
                <Button style={{marginLeft: "auto"}} type="submit" >Get Data</Button>
            </Form>
            <DataWrap>
                {
                    data?(
                        <> 
                        <DataTable
                            columns={columns}
                            data={data} 
                            pagination  
                            theme="dark" 
                        />
                        </>
                    ):''
                }
            </DataWrap>
        </>
    )
}
