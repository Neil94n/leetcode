/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    
    intervals.sort(function(a, b) {
      if (a.start !== b.start)
        return a.start - b.start; // from small to big
      return a.end - b.end;
    });
  
    var len = intervals.length
      , ans = []
      , start
      , end;
  
    for (var i = 0; i < len; i++) {
      var s = intervals[i].start
        , e = intervals[i].end;
  
      // begin a new one
      if (start === undefined)
        start = s, end = e;
      else if (s <= end)
        end = Math.max(e, end);
      else {
        var obj = new Interval(start, end);
        ans.push(obj);
        start = s;
        end = e;
      }
    }
  
    if (start !== undefined) {
      var obj = new Interval(start, end);
      ans.push(obj);
    }
  
    return ans;
  };