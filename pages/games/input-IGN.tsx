import React, { ChangeEvent, useState } from "react";
import { useJoinTournamentMutation } from "@/redux/services/join-tournament";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

const InputIGN = () => {
  const { query, push } = useRouter();

  const [IGN, setIGN] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIGN(e?.target?.value);
  };

  // Access Tournament Tournament ID query parameters
  const tournamentId = query.tournament_id;

  // Access Player Id
  const playerId = query.player_id;

  // Join Tournament API mutation
  const [joinTournament, { data, isLoading, isError }] =
    useJoinTournamentMutation();

  // Subbmit Form
  const handleSubmit = () => {
    joinTournament({
      tournament_id: `${tournamentId}`,
      player_id: `${playerId}`,
      ign: `${IGN}`,
    })
      .unwrap()
      .then(() => {
        push(`/games/registration-successful`);
      })
      .catch((err) => {
        alert(err ?? "Error Getting you In!");
      });
  };
  return (
    <form
      className='flex flex-col items-center gap-y-[32px]'
      onSubmit={() => handleSubmit()}
    >
      <input
        type='text'
        placeholder='Input IGN'
        onChange={(e) => handleInputChange(e)}
        name='IGN'
        required
        className='bg-transparent w-full text-center text-white text-[0.87] font-[700] px-[12px] py-[12px] border-[1px] border-red rounded-[5px]'
      />

      <Button
        placeholder='Sponsor Tournament'
        ripple={true}
        disabled={isLoading}
        className='text-white text-[0.875rem] bg-red w-[170px] h-[40px] rounded-[5px]'
      >
        {isLoading ? "Submiting..." : "Continue"}
      </Button>
    </form>
  );
};

export default InputIGN;
