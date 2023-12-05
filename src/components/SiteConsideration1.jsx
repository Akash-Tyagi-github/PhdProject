import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const SiteConsideration1 = () => {
    const [choices, setChoices] = useState({ "first": "", "second": "", "third": "" })
    const [actualChoicesScore, setActualChoicesScore,] = useState({ "first": "", "second": "", "third": "" })

    const [finalScore, setFinalScore] = useState("")
    const handleChange = (e, number) => {
        let score = e.target.value > 0.5 ? 0.5 : Number(e.target.value)
        setChoices({ ...choices, [number]: Number(e.target.value) })
        setActualChoicesScore({ ...actualChoicesScore, [number]: score })
    }
    useEffect(() => {
        const sum = Object.values(actualChoicesScore).reduce((acc, value) => acc + value, 0);
        setFinalScore(sum)
    }, [actualChoicesScore])
    return (
        <>
            <ul>
                <li>Accessibility</li>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Choose</th>
                            <th>Total weight</th>
                            <th>Weight</th>
                            <th>Score</th>
                            <th>Final Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Is the width of the road in front of the house is a minimum of 3 meters ?</td>
                            <td><select onChange={(e) => handleChange(e, "first")} value={choices.first}>
                                <option disabled value="">Choose..</option>
                                <option id="1" value={0.5} >Yes</option>
                                <option id="2" value={0}>No</option>
                                <option id="3" value={0.6}>N/A</option>
                            </select></td>
                            <td rowSpan={3} className='text-center align-middle'>1.5</td>
                            <td>0.5</td>
                            <td>{choices?.first > 0.5 ? 0.5 : choices?.first}</td>
                            <td rowSpan={3} className='text-center align-middle ' style={{backgroundColor:"white"}}>{finalScore}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>the width of the entrance gate of the house site is 2.4 meters?</td>
                            <td><select onChange={(e) => handleChange(e, "second")} value={choices.second}>
                                <option disabled value="">Choose..</option>
                                <option value={0.5}>Yes</option>
                                <option value={0}>No</option>
                                <option value={0.6}>N/A</option>
                            </select></td>
                            <td>0.5</td>
                            <td>{choices?.second > 0.5 ? 0.5 : choices?.second}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>the width of the entrance door to the main building is 1.2 meters.?</td>
                            <td><select onChange={(e) => handleChange(e, "third")} value={choices.third}>
                                <option disabled value="">Choose..</option>
                                <option value={0.5}>Yes</option>
                                <option value={0}>No</option>
                                <option value={0.6}>N/A</option>
                            </select></td>
                            <td>0.5</td>
                            <td>{choices?.third > 0.5 ? 0.5 : choices?.third}</td>

                        </tr>
                    </tbody>
                </Table>
                <li>Site and contextual design</li>

            </ul>
        </>
    )
}

export default SiteConsideration1