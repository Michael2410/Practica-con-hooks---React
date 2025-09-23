import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
   
}

interface Props {
    id: number;
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [ isLoading, setIsLoading ] = useState(true);

    const getPokemonId = async (id: number) => {
        setIsLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon({
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.front_default,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getPokemonId(id);
    }, [id]);

    return {
        //props
        pokemon,
        isLoading,

        formattedId: `#${pokemon?.id.toString().padStart(3, '0')}`
    }


};

       