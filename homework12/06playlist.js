function Playlist(){
    this.songs = []
    this.current_song_index = 0
    this.is_playing = false
}
function Song(song_name, artist){
    this.song_name = song_name
    this.artist = artist
}
Playlist.prototype.add = function(song){
    this.songs.push(song)
}
Playlist.prototype.play = function(){
    this.is_playing = true
    return this.songs[this.current_song_index][0] + " started"
}
Playlist.prototype.stop = function(){
    this.is_playing = false
    return this.songs[this.current_song_index][0] + " stopped"
}
