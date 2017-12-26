var playlist = {
<<<<<<< HEAD
  artistName: "song1",
=======
  artist1: "song1",
>>>>>>> ad16de4562245599b58210621b4279a98828f1b2
  artist2: "song2", 
  artist3: "song3"
};

function updatePlaylist (obj, name, song){
  obj[name] = song;
  return obj;
}

<<<<<<< HEAD
 function removeFromPlaylist(obj, name){
   delete obj[name];
   return obj;
=======
 function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
   return playlist;
>>>>>>> ad16de4562245599b58210621b4279a98828f1b2
 }