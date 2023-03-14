// Define a class Song, which holds the following information about
// songs: typeList, name, and time.
//     You will receive the input as an array.
//     The first element n will be the number of songs. Next n elements will
// be the songs data in the following format: "{typeList}_{name}_{time}",
//     and the last element will be typeList / "all".
//     Print only the names of the songs, which have the same typeList
// (obtained as the last parameter). If the value of the last element is "all",
//     print the names of all the songs.


function songs(num, input) {

    for (let i = 0; i < num; i++){
        let [typeList, name, time] = input[i].split('_')

        class Song {
            constructor(typeList, name, time){

                this.typeList = typeList;
                this.name = name;
                this.time = time;
            }

            printSong(){
                console.log(this.name)
            }

        }

        let song = new Song(typeList, name, time)

        if (song.typeList === input[input.length - 1] || input[input.length - 1] === 'all'){
            song.printSong()

        }
    }
}

songs(3, ['favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
songs(4, ['favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])
songs(2, ['like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])
