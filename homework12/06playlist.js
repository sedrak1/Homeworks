function Playlist(){
    this.songs = []
    this.current_song_index = 0
    this.is_playing = false
}
function Song(song_name, artist){
    this.song_name = song_name
    this.artist = artist
}
Playlist.prototype.add = function(...songs){
    this.songs.push(...songs)
}
Playlist.prototype.play = function(){
    this.is_playing = true
    return this.songs[this.current_song_index]["song_name"] + " started"
}
Playlist.prototype.stop = function(){
    this.is_playing = false
    return this.songs[this.current_song_index]["song_name"] + " stopped"
}
Playlist.prototype.next = function(){
    if(this.current_song_index === this.songs.length - 1){
        this.current_song_index = 0
        return this.songs[this.songs.length - 1]["song_name"] + " stopped" + ", " + this.songs[this.current_song_index]["song_name"] + " started"
    }
    this.current_song_index ++
    return this.songs[this.current_song_index - 1]["song_name"] + " stopped" + ", " + this.songs[this.current_song_index]["song_name"] + " started"
}
const playlist = new Playlist()
const varderi_partez = new Song("Varderi partez", "Aram Asatryan")
const the_unforgiven = new Song("The unforgiven", "Metallica")
playlist.add(varderi_partez, the_unforgiven)
console.log(playlist.next())
console.log(playlist.play())
console.log(playlist.stop())
console.log(playlist.next())
console.log(playlist.play())
