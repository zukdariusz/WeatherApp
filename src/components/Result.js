import React from "react";
import './Result.css'

const Result = props => {

    const {
        value,
        id_stacji,
        stacja,
        data_pomiaru,
        godzina_pomiaru,
        temperatura,
        predkosc_wiatru,
        kierunek_wiatru,
        wilgotnosc_wzgledna,
        suma_opadu,
        cisnienie,
        err } = props.weather

        let content = null

        if(!err && stacja){
            content = (
                <>
                    <h3>Wyniki wyszukiwania dla {stacja}</h3>
                    <h4>Data pomiaru: {data_pomiaru}</h4>
                    <h4>Temperatura: {temperatura} &#176;C</h4>
                    <h4>Prędkość wiatru: {predkosc_wiatru} m/s</h4>
                    <h4>Kierunek wiatru: {kierunek_wiatru}</h4>
                    <h4>Wilgotność względna: {wilgotnosc_wzgledna}</h4>
                    <h4>Suma opadu: {suma_opadu} mm</h4>
                    <h4>Ciśnienie: {cisnienie} hPa</h4>
                </>
            )
        }




    return(
        <div className="result">
        {err ? `Nie mamy w bazie ${stacja}` : content}
        </div>

    )
}

export default Result