import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  $countSubject = new BehaviorSubject(0)
  public up() {
    this.$countSubject.next(this.$countSubject.value+1);
  }
  public down() {
    this.$countSubject.next(this.$countSubject.value-1);
  }
}
